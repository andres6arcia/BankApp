import { Module } from '@nestjs/common';
import { PostgresModule } from './databases/postgres/postgres.module';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';

@Module({
  imports: [PostgresModule],
  controllers: [],
  providers: [UserService, RoleService],
  exports: [UserService, RoleService],
})
export class PersistenceModule {}
