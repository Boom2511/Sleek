import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class GatewayAuthController {
  constructor(@Inject('AUTH') private client: ClientProxy) {}

  @Post('register')
  register(@Body() data: any) {
    return this.client.send({ cmd: 'register' }, data);
  }

  @Post('login')
  login(@Body() data: any) {
    return this.client.send({ cmd: 'login' }, data);
  }
}