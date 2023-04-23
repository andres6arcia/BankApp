import { UserDomainEntityBase } from '../../../../../domain/entities';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { RolePostgresEntity } from './role-postgres.entity';

@Entity('user', { schema: 'public' })
export class UserPostgresEntity extends UserDomainEntityBase {
  @Column('uuid', {
    primary: true,
    name: 'user_id',
    default: () => 'uuid_generate_v4()',
  })
  userId?: string;

  @Column('character varying', { name: 'email', length: 255 })
  email?: string;

  @Column('character varying', { name: 'name', length: 100 })
  name?: string;

  @Column('boolean', { name: 'email_verified' })
  emailVerified?: boolean;

  @ManyToMany((type) => RolePostgresEntity, (role) => role.users, {
      cascade: true,
  })
  @JoinTable()
  roles?: RolePostgresEntity[]
}
