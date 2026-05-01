import { Transport, RmqOptions } from '@nestjs/microservices';

export const rmqConfig = (queue: string): RmqOptions => ({
  transport: Transport.RMQ,
  options: {
    urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
    queue,
    prefetchCount: 10, 
    queueOptions: {
      durable: true,
      arguments: {
      'x-dead-letter-exchange': 'shared.dlx',
      'x-dead-letter-routing-key': queue,
      },
    },
    noAck: false, 
  },
});