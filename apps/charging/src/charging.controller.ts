import { Controller, Get } from '@nestjs/common';
import { ChargingService } from './charging.service';

@Controller()
export class ChargingController {
  constructor(private readonly chargingService: ChargingService) {}

  @Get()
  getHello(): string {
    return this.chargingService.getHello();
  }
}
