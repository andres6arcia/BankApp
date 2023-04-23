import {
  EmailValueObject,
  UserIdValueObject,
  NameValueObject,
  EmailVerifiedValueObject,
} from '../../value-objects/user';
import { IRoleDomainEntity } from './role.interface';

export interface IUserDomainEntity {
  userId?: string | UserIdValueObject;
  email?: string | EmailValueObject;
  name?: string |   NameValueObject;
  emailVerified?: boolean | EmailVerifiedValueObject;
  roles?: IRoleDomainEntity[];
}
