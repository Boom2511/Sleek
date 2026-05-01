import { Module, DynamicModule } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { rmqConfig } from '@sleek/config'; 

@Module({})
export class RabbitMqModule {
  static register(serviceName: string): DynamicModule {
    const queueName = `${serviceName}_QUEUE`;
    const finalConfig = rmqConfig(queueName); 

    return ClientsModule.register([
      {
        name: serviceName,
        transport: finalConfig.transport,
        options: {
          ...finalConfig.options,
          noAck: true, 
        },
      },
    ]);
  }
}