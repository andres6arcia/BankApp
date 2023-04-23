import { Injectable } from '@nestjs/common';
import { RolePostgresService } from '../databases/postgres/services/role.service';

@Injectable()
export class RoleService extends RolePostgresService {}
