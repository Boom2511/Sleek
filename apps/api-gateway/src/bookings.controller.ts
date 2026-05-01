import {
  Controller,
  Post,
  Body,
  Inject,
  UseGuards,
  Param,
  Req,
  Delete,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SharedAuthGuard } from '@sleek/shared-auth';

@Controller('bookings')
export class GatewayBookingsController {
  constructor(@Inject('BOOKING') private client: ClientProxy) {}

  @UseGuards(SharedAuthGuard)
  @Post()
  createBooking(@Body() data: any, @Req() req: any) {
    return this.client.send({ cmd: 'create_booking' }, {
      ...data,
    userId: req.user.id, 
    metadata: { token: req.headers.authorization?.split(' ')[1] }
    });

  }

  @Delete(':id/cancel') 
  @UseGuards(SharedAuthGuard)
  async cancel(@Param('id') id: string, @Req() req: any) {

    return this.client.send({ cmd: 'cancel_booking' },
      {
        bookingId: id,
        userId: req.user.id,
      },
    );
  }
}
