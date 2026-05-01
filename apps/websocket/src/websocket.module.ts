import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { RedisModule } from '@sleek/redis'; 

@Module({
  imports: [RedisModule],
  providers: [EventsGateway],
})
export class WebsocketModule {}