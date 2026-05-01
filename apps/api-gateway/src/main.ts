import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { setupApp } from '@sleek/common';
import { SpelunkerModule } from 'nestjs-spelunker';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule, {snapshot: true});

  app.enableCors();
  setupApp(app);

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT || 3000);

  console.log(`API Gateway running on port ${process.env.PORT || 3000}`);
  console.log(app.getHttpAdapter().getType());

}
bootstrap();
