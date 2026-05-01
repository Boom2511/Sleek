import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SharedAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type = context.getType<'http' | 'rpc'>();
    let token: string | undefined;

    if (type === 'http') {
      const request = context.switchToHttp().getRequest();
      token = request.headers.authorization?.split(' ')[1];
    } else if (type === 'rpc') {
      const data = context.switchToRpc().getData();
      token = data?.metadata?.token;
    }

    if (!token) {
      throw new UnauthorizedException('No token found');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);

      if (type === 'http') {
        context.switchToHttp().getRequest().user = payload;
      }

      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
