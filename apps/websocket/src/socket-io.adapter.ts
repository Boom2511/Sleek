// apps/websocket/src/socket-io.adapter.ts
import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplicationContext } from '@nestjs/common';
import { RedisService } from '@sleek/redis'; 
import { createAdapter } from '@socket.io/redis-adapter';
import { ServerOptions } from 'socket.io';

export class RedisIoAdapter extends IoAdapter {
  private adapterConstructor: any;

  constructor(private app: INestApplicationContext) {
    super(app);
  }

  async connectToRedis(): Promise<void> {
    const redisService = this.app.get(RedisService);
    const pubClient = redisService.redisClient;
    const subClient = pubClient.duplicate(); 

    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(this.adapterConstructor);
    return server;
  }
}