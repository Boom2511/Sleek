import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendBookingEmail(data: any) {
    const { userId, bookingId, message } = data;
    
    console.log(`Sending notification to User: ${userId}`);
    console.log(`Content: ${message} (Booking ID: ${bookingId})`);

    
    return true;
  }
}