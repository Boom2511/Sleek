import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; 
import { SharedAuthGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [SharedAuthGuard],
  exports: [SharedAuthGuard, JwtModule], 
})
export class SharedAuthModule {}