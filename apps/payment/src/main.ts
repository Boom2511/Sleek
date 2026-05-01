import { NestFactory } from '@nestjs/core';
import { PaymentModule } from './payment.module';
import { rmqConfig } from '@sleek/rabbitmq';
import { setupApp } from '@sleek/common';

async function bootstrap() {
  const app = await NestFactory.create(PaymentModule);

  setupApp(app);

  app.connectMicroservice(rmqConfig('payment_queue'));

  await app.startAllMicroservices();

  console.log(`Payment worker started`);
}
bootstrap();
