import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Keyv from 'keyv';
import KeyvRedis from '@keyv/redis';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  public readonly keyv: Keyv;
  public readonly redisClient: Redis; 

  constructor() {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
    
    this.redisClient = new Redis(redisUrl);
    
    const redisStore = new KeyvRedis(this.redisClient as any); 
    
    this.keyv = new Keyv({ 
      store: redisStore, 
      namespace: 'sleek-ev' 
    });

    this.keyv.on('error', (err) => console.error('Keyv Connection Error', err));
  }

  async acquireLock(key: string, ttl = 5): Promise<boolean> {
  const result = await this.redisClient.set(key, 'LOCKED', 'EX', ttl, 'NX');
  return result === 'OK';
}

async releaseLock(key: string): Promise<void> {
  await this.redisClient.del(key);
}

  async getValue<T>(key: string): Promise<T | undefined> {
    return await this.keyv.get(key);
  }

  async setValue(key: string, value: any, ttl?: number): Promise<void> {
    await this.keyv.set(key, value, ttl);
  }

  onModuleDestroy() {
    this.redisClient.disconnect();
  }
}