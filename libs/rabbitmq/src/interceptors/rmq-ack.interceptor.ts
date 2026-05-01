// libs/rabbitmq/src/interceptors/rmq-ack.interceptor.ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class RmqAckInterceptor implements NestInterceptor {
  private readonly logger = new Logger(RmqAckInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler) {
    const rmqContext = context.switchToRpc().getContext<RmqContext>();
    const channel = rmqContext.getChannelRef();
    const message = rmqContext.getMessage();

    return next.handle().pipe(
      tap(() => {
        channel.ack(message);
      }),
      catchError((err) => {
        const isSystemError = err.code === 'P2028' || err.message?.includes('connection');

        channel.nack(message, false, false); 
        this.logger.error(`Message Nacked: ${err.message}`);
        
        return throwError(() => err);
      }),
    );
  }
}