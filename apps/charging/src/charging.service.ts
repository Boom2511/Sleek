import { Injectable } from '@nestjs/common';

@Injectable()
export class ChargingService {
  getHello(): string {
    return 'Hello World!';
  }
}
