import { NestFactory } from '@nestjs/core';
import { BookingModule } from './booking.module';
import { rmqConfig } from '@sleek/config'; 
import { ValidationPipe } from '@nestjs/common'; 
import { loggerConfig } from '@sleek/logger/logger.config';
import { WinstonModule } from 'nest-winston/dist/winston.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    BookingModule, 
    {
    ...rmqConfig('BOOKING_QUEUE'),
    logger: WinstonModule.createLogger(loggerConfig),
  }
);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen();
  console.log('⚡️ Booking Microservice is listening via RabbitMQ...');
}
bootstrap();