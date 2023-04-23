import { RoleDomainEntityBase } from '../../../../../domain/entities/role.domain-entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { UserPostgresEntity } from './user-postgres.entity';

@Entity('role', { schema: 'public' })
export class RolePostgresEntity extends RoleDomainEntityBase {
  @Column('uuid', {
    primary: true,
    name: 'role_id',
    default: () => 'uuid_generate_v4()',
  })
  roleId?: string;

  @Column('character varying', { name: 'name', length: 100 })
  name?: string;

  @Column('character varying', { name: 'description', length: 200 })
  description?: string;

  @ManyToMany((type) => UserPostgresEntity, (user) => user.roles)
  users?: UserPostgresEntity[]
}
