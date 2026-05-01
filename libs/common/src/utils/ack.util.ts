
import { RmqContext } from '@nestjs/microservices';

export const handleRmqAck = (context: RmqContext) => {
  const channel = context.getChannelRef();
  const message = context.getMessage();
  channel.ack(message);
};

export const handleRmqNack = (context: RmqContext) => {
  const channel = context.getChannelRef();
  const message = context.getMessage();

  channel.nack(message, false, false);
};