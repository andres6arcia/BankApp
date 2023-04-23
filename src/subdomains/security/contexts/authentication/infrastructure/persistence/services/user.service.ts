import { Injectable } from '@nestjs/common';
import { UserPostgresService } from '../databases/postgres/services/user.service';

@Injectable()
export class UserService extends UserPostgresService {}
