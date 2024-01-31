import * as env from 'env-var';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
export const pubKey = `-----BEGIN PUBLIC KEY-----\n${process.env.KC_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;
export const config = {
  auth: {
    pubkey: env.get('KC_PUBLIC_KEY').required().asString(),
  },
};
export const appName = 'myapp';
