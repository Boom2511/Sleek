import { NestFactory } from '@nestjs/core';
import { VehicleModule } from './vehicle.module';

async function bootstrap() {
  const app = await NestFactory.create(VehicleModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
