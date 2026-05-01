import { Test, TestingModule } from '@nestjs/testing';
import { ChargingController } from './charging.controller';
import { ChargingService } from './charging.service';

describe('ChargingController', () => {
  let chargingController: ChargingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ChargingController],
      providers: [ChargingService],
    }).compile();

    chargingController = app.get<ChargingController>(ChargingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(chargingController.getHello()).toBe('Hello World!');
    });
  });
});
