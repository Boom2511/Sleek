import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService, ConfigModule } from '@nestjs/config';
import KeyvRedis, { Keyv } from '@keyv/redis';
import { RedisService } from './redis.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          stores: [
            new Keyv(), 
            new KeyvRedis(config.get<string>('REDIS_URL')!),
          ],
          ttl: 60000, max: 5000,
        };
      },
      isGlobal: true,
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}