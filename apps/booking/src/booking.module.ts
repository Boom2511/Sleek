import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { SharedLoggerModule } from '@sleek/logger';
import { SharedAuthModule } from '@sleek/shared-auth';
import { DatabaseModule } from '@sleek/database';
import { RedisModule } from '@sleek/redis';
import { RabbitMqModule } from '@sleek/rabbitmq';

@Module({
  imports: [
    SharedLoggerModule,
    SharedAuthModule,
    DatabaseModule,
    RedisModule,
    RabbitMqModule.register('NOTIFICATION'),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
