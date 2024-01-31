import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';
import { appName } from 'src/constants/constants';
import { use } from 'passport';

interface KeycloakAccessToken {
  [key: string]: unknown;
  email?: string;
  violet_roles: {
    violet_database: [string];
    violet_dashboards: [string];
    violet_forms: [string];
  };
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles: string[] = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: KeycloakAccessToken = request.user;
    console.log({ user });
    console.log({ u: user.violet_roles });
    const usersRole = user.violet_roles.violet_forms[0];
    console.log({ usersRole });
    const res = roles.some((v) => v === usersRole);

    if (!res) throw new ForbiddenException('Invalid role permission');
    return res;
  }
}
