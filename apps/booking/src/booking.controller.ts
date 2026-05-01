import { Controller, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RmqAckInterceptor } from '@sleek/rabbitmq';
import { BookingService } from './booking.service';

@Controller()
@UseInterceptors(RmqAckInterceptor) 
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @MessagePattern({ cmd: 'create_booking' })
  async handleBooking(@Payload() data: any) {
    if (!data.userId) return { success: false, message: 'Unauthorized' };
    
    return await this.bookingService.createBooking(data);
  }

  @MessagePattern({ cmd: 'cancel_booking' })
  async handleCancelBooking(@Payload() data: any) {
    return await this.bookingService.cancelBooking(data.bookingId, data.userId);
  }
}