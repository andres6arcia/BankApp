import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

function validateRequest(request: any): boolean | Promise<boolean> | Observable<boolean> {
    if (request.headers.authentication !== 'TOKEN-DUMMY') {
      throw new UnauthorizedException('Usuario no autenticado');
    }
    return true;
}

