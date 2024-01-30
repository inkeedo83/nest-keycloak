import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { pubKey } from 'src/constants/constants';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: pubKey,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any): Promise<any> {
    console.log({ val: payload.resource_access.myapp });
    return payload;
  }
}
