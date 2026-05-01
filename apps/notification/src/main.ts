// apps/notification/src/main.ts
import { NestFactory } from '@nestjs/core';
import { NotificationModule } from './notification.module';
import { rmqConfig } from '@sleek/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    NotificationModule,
    rmqConfig('NOTIFICATION_QUEUE'),
  );

  await app.listen();
  console.log('🔔 Notification Service is waiting for messages...');
}
bootstrap();