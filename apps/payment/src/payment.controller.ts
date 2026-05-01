import { Controller } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext, ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Controller()
export class PaymentController {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private readonly notificationClient: ClientProxy,
  ) {}

  @EventPattern('booking.created')
  async handleBookingCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();

    try {
      console.log('💳 Processing payment for:', data.bookingId);
      
      this.notificationClient.emit('payment.completed', {
        userId: data.userId,
        message: `Payment for booking ${data.bookingId} was successful!`,
      });

      channel.ack(message); 
    } catch (error) {
      channel.nack(message, false, false); 
    }
  }
}