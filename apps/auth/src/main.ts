import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { rmqConfig } from '@sleek/config/rmq.config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AuthModule,
    rmqConfig('AUTH_QUEUE'),
  );
  await app.listen();
  console.log('🔐 Auth Microservice is running');
}
bootstrap();
