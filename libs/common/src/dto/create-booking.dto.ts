import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  stationId!: string;

  @IsNumber()
  @IsNotEmpty()
  vehicleId!: number;
  @IsString()
  @IsNotEmpty()
  userId!: string;

}