import { IsEmpty } from '../../../../../../shared/validations/is-empty.validation';
import { IRoleDomainEntity, IUserDomainEntity } from './interfaces';
import { DescriptionValueObject, RoleIdValueObject, NameValueObject } from '../value-objects/role';

export class RoleDomainEntityBase implements IRoleDomainEntity {
  roleId?: string | RoleIdValueObject;
  name?: string | NameValueObject;
  description?: string | DescriptionValueObject;
  users?: IUserDomainEntity[];

  constructor(role?: IRoleDomainEntity) {
    if (!IsEmpty(role?.roleId)) this.roleId = role.roleId;
    if (!IsEmpty(role?.name)) this.name = role.name;
    if (!IsEmpty(role?.description)) this.description = role.description;
    if (!IsEmpty(role?.users)) this.users = role.users;
  }
}
