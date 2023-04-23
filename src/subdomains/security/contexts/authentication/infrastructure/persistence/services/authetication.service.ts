import { Injectable } from '@nestjs/common';
import { Auth0Strategy } from '../authentication/auth0/services/auth0-strategy.service';

@Injectable()
export class AutheticationService extends Auth0Strategy {}