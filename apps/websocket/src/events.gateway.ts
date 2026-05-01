import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagePattern, Payload } from '@nestjs/microservices';

@WebSocketGateway({ cors: true })
export class EventsGateway {
  @WebSocketServer() server!: Server;

  @SubscribeMessage('join_station')
  handleJoinRoom(client: Socket, stationId: string) {
    client.join(`station_${stationId}`);
    return { status: 'joined', stationId };
  }

  @MessagePattern({ cmd: 'broadcast_update' })
  handleBroadcast(@Payload() data: any) {
    this.server.to(`station_${data.stationId}`).emit('update', data.payload);
  }
}