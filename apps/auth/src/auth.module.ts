import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '@sleek/database'; 
import { SharedAuthModule } from '@sleek/shared-auth';
@Module({
  imports: [DatabaseModule, SharedAuthModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
