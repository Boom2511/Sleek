import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '@sleek/database';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private db: DatabaseService,
    private jwtService: JwtService,
  ) {}
  async register(data: any) {
  const existingUser = await this.db.user.findUnique({ where: { email: data.email } });
  if (existingUser) throw new RpcException('Email already exists');

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return this.db.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
    },
  });
  }
  async login(email: string, pass: string) {
    const user = await this.db.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('อีเมลหรือรหัสผ่านไม่ถูกต้อง');

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) throw new UnauthorizedException('อีเมลหรือรหัสผ่านไม่ถูกต้อง');

    const payload = { id: user.id, email: user.email };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
