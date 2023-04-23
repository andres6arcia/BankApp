import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { UserPostgresEntity } from './entities/user-postgres.entity';
import { UserRepository } from './repositories/user.repository';
import { UserPostgresService } from './services/user.service';
import { RoleRepository } from './repositories/role.repository';
import { RolePostgresEntity } from './entities/role-postgres.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([
      UserPostgresEntity,
      RolePostgresEntity,
    ]),
    UserPostgresEntity,
    RolePostgresEntity,
  ],
  controllers: [],
  providers: [
    TypeOrmPostgresConfigService,
    UserPostgresService,
    UserRepository,
    RoleRepository,
  ],
  exports: [UserPostgresService, UserRepository, RoleRepository, UserPostgresEntity, RolePostgresEntity],
})
export class PostgresModule {}
