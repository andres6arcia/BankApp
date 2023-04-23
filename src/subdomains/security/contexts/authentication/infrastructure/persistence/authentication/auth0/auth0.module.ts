import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Auth0Strategy } from './services/auth0-strategy.service';

@Module({
  imports: [
    PassportModule,
  ],
  controllers: [],
  providers: [Auth0Strategy],
})
export class Auth0Module {}