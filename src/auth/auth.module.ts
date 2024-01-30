import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

import { pubKey } from 'src/constants/constants';
import { AuthStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: pubKey,
      verifyOptions: { algorithms: ['RS256'] },
    }),
  ],
  providers: [AuthService, AuthStrategy],
})
export class AuthModule {}
