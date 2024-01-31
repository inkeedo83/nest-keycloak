import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';
import { appName } from 'src/constants/constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles: string[] = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const usersRoles: string[] = request.user['resource_access'][appName].roles;
    console.log({ usersRoles });
    const res = roles.some((v) => usersRoles.includes(v));

    if (!res) throw new ForbiddenException('Invalid role permission');
    return res;
  }
}
