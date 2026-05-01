import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.printf(({ level, message, context, timestamp, ms }) => {
              return `[SleekEV] ${timestamp} [${context}] ${level}: ${message} ${ms}`;
            }),
            winston.format.colorize({ all: true })
          ),
        }),
      ],
    }),
  ],
})
export class SharedLoggerModule {}