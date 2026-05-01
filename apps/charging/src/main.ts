import { NestFactory } from '@nestjs/core';
import { ChargingModule } from './charging.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ChargingModule);
  await app.listen(process.env.port ?? 3000);
  app.connectMicroservice({
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'charging_queue',
    queueOptions: { durable: true },
  },
});

}
bootstrap();
