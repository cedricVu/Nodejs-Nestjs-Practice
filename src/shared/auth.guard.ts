import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    if (!authorization) {
        throw new HttpException('Not found authorization', HttpStatus.UNAUTHORIZED);
    }
    request.user = await this.validateAuthorization(authorization);;
    return true;
  }

  async validateAuthorization(authorization) {
    try {
        const token = authorization.split('Bearer ')[1];
        if (!token) {
            throw new HttpException('Token is invalid', HttpStatus.UNAUTHORIZED);
        }
        return await jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (e) {
        throw new HttpException(e.message, HttpStatus.UNAUTHORIZED);
    }
  }
}