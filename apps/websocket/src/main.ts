import { NestFactory } from '@nestjs/core';
import { WebsocketModule } from './websocket.module';
import { RedisIoAdapter } from './socket-io.adapter'; 
import { rmqConfig } from '@sleek/config';


async function bootstrap() {
  const app = await NestFactory.create(WebsocketModule);
  
  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();
  app.useWebSocketAdapter(redisIoAdapter);
  rmqConfig('WEBSOCKET_QUEUE');


  await app.startAllMicroservices();
  await app.listen(3001);
  console.log('WebSocket is running on port 3001');
}
bootstrap();

