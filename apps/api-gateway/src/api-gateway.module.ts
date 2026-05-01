import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { RedisModule } from '@sleek/redis';
import { RabbitMqModule } from '@sleek/rabbitmq';
import { SleekConfigModule } from '@sleek/config';
import { SharedAuthModule } from '@sleek/shared-auth';
import { GatewayBookingsController } from './bookings.controller';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { GatewayAuthController } from './auth.controller';

@Module({
  imports: [
    SleekConfigModule,
    RedisModule,
    SharedAuthModule,
    RabbitMqModule.register('BOOKING',),
    RabbitMqModule.register('AUTH',),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
      port: 8001,
    }),
  ],
  controllers: [ApiGatewayController, GatewayBookingsController, GatewayAuthController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
