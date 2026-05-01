import { Module } from '@nestjs/common';
import { ChargingController } from './charging.controller';
import { ChargingService } from './charging.service';

@Module({
  imports: [],
  controllers: [ChargingController],
  providers: [ChargingService],
})
export class ChargingModule {}
