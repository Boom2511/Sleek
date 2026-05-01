// apps/notification/src/notification.controller.ts
import { Controller } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern('booking_confirmed')
  async handleBookingConfirmed(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      await this.notificationService.sendBookingEmail(data);

      channel.ack(originalMsg);
    } catch (error) {
      console.error('Failed to send notification:', error);
      channel.nack(originalMsg, false, false);
    }
  }
}