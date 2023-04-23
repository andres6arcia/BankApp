import { IsEmpty } from '../../../../../../shared/validations/is-empty.validation';
import {
  EmailValueObject,
  UserIdValueObject,
  NameValueObject,
  EmailVerifiedValueObject
} from '../value-objects/user';
import { IUserDomainEntity } from './interfaces';
import { RoleDomainEntityBase } from './role.domain-entity';

export class UserDomainEntityBase implements IUserDomainEntity {
  userId?: string | UserIdValueObject;
  name?: string | NameValueObject;
  email?: string | EmailValueObject;
  emailVerified?: boolean | EmailVerifiedValueObject;
  roles?: RoleDomainEntityBase[];

  constructor(user?: IUserDomainEntity) {
    if (!IsEmpty(user?.userId)) this.userId = user.userId;
    if (!IsEmpty(user?.name)) this.name = user.name;
    if (!IsEmpty(user?.email)) this.email = user.email;
    if (!IsEmpty(user?.emailVerified)) this.emailVerified = user.emailVerified;
    if (!IsEmpty(user?.roles)) this.roles = user.roles;
  }

  addRole(role: RoleDomainEntityBase) {
    if (!IsEmpty(role)) {
      if (!this.roles) this.roles = [];
      this.roles.push(role);
    }
  }
}
