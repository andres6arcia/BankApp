import { IsEmpty } from 'src/shared/validations';
import {
  EmailValueObject,
  PasswordValueObject,
} from '../value-objects/user';
import { ILoginDomainEntity } from './interfaces';

export class LoginDomainEntityBase implements ILoginDomainEntity {
  email?: string | EmailValueObject;
  password?: string | PasswordValueObject;

  constructor(login?: ILoginDomainEntity) {
    if (!IsEmpty(login?.password)) this.password = login.password;
    if (!IsEmpty(login?.email)) this.email = login.email;
  }
}
