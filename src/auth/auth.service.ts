import { Injectable } from '@nestjs/common';
import 'dotenv/config';

export const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.KC_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;
@Injectable()
export class AuthService {
  constructor() {}
}
