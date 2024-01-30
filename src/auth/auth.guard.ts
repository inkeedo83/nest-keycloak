import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';
import { config } from 'src/constants/constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  //   canActivate(
  //     context: ExecutionContext,
  //   ): boolean | Promise<boolean> | Observable<boolean> {
  //     const token = context
  //       .switchToHttp()
  //       .getRequest()
  //       .headers['authorization'].split(' ')[1];
  //     console.log({ token });
  //     const res = verify(
  //       token,
  //       `-----BEGIN PUBLIC KEY-----\n${process.env.KC_PUBLIC_KEY}\n-----END PUBLIC KEY-----`,
  //       { algorithms: ['RS256'] },
  //     );
  //     console.log({ res });
  //     return !!res;
  //   }
}
