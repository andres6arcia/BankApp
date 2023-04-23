import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-auth0';
import { Request } from 'express';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy, process.env.AUTH0_STRATEGY) {
  constructor() {
    super({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL,
      audience: process.env.AUTH0_AUDIENCE,
      scope: 'openid profile email',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    extraParams: any,
    profile: any,
    done: VerifyCallback,
    req: Request,
  ) {
    const user = {
      accessToken,
      refreshToken,
      extraParams,
      profile,
    };
    done(null, user);
  }
}