// apps/booking/src/booking.service.ts
import { Injectable, Inject, Logger } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { DatabaseService } from '@sleek/database';
import { RedisService } from '@sleek/redis';
import { BookingStatus } from '@prisma/client';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return JSON.stringify(error);
}

@Injectable()
export class BookingService {
  private readonly logger = new Logger(BookingService.name);

  constructor(
    @Inject('NOTIFICATION') private readonly client: ClientProxy,
    private readonly db: DatabaseService,
    private readonly storage: RedisService,
  ) {}

  async createBooking(data: any) {
    const resourceId = `charger:${data.chargerId}`;

    const lockAcquired = await this.storage.acquireLock(resourceId);
    if (!lockAcquired) {
      return { success: false, message: 'หัวชาร์จนี้กำลังทำรายการอยู่' };
    }

    try {
      return await this.db.$transaction(async (tx: any) => {
        const charger = await tx.charger.findUnique({
          where: { id: data.chargerId },
        });

        if (!charger || charger.status !== 'AVAILABLE') {
          throw new Error('CHARGER_NOT_AVAILABLE');
        }

        const booking = await tx.booking.create({
          data: {
            userId: data.userId,
            chargerId: data.chargerId,
            startTime: new Date(data.startTime),
            endTime: new Date(data.endTime),
            status: BookingStatus.CONFIRMED,
          },
        });

        await tx.charger.update({
          where: { id: data.chargerId },
          data: { status: 'OCCUPIED' },
        });

        this.client.emit('booking_confirmed', {
          userId: data.userId,
          bookingId: booking.id,
          message: 'ยืนยันการจองสำเร็จ',
        });

        return { success: true, data: booking };
      });

    } catch (error: unknown) {
      this.logger.error(`Failed to create booking: ${getErrorMessage(error)}`);

      if (error instanceof Error && error.message === 'CHARGER_NOT_AVAILABLE') {
        return { success: false, message: 'ขออภัย หัวชาร์จถูกจองไปแล้ว' };
      }
      
      throw new RpcException({
        status: 'error',
        message: 'Internal Service Error',
        details: getErrorMessage(error),
      });

    } finally {
      await this.storage.releaseLock(resourceId);
    }
  }

  async cancelBooking(bookingId: string, userId: string) {
    this.logger.log(
      `🔄 Attempting to cancel booking: ${bookingId} for user: ${userId}`,
    );
    try {
      const booking = await this.db.booking.findFirst({
        where: { id: bookingId, userId },
      });

      if (!booking) {
        return { success: false, message: 'ไม่พบรายการจองนี้' };
      }

      if (booking.status === 'CANCELLED') {
        return {
          success: true,
          message: 'รายการนี้ถูกยกเลิกไปก่อนหน้านี้แล้ว',
          alreadyCancelled: true,
        };
      }

      await this.db.$transaction([
        this.db.booking.update({
          where: { id: bookingId },
          data: { status: 'CANCELLED' },
        }),
        this.db.charger.update({
          where: { id: booking.chargerId },
          data: { status: 'AVAILABLE' },
        }),
      ]);

      return { success: true, message: 'ยกเลิกการจองเรียบร้อยแล้ว' };
    } catch (error) {
      this.logger.error(
        `❌ Failed to cancel booking ${bookingId}: ${getErrorMessage(error)}`,
      );
      throw error;
    }
  }
}
