import { EmailValueObject, PasswordValueObject } from "../../value-objects";


export interface ILoginDomainEntity {
    email?: string | EmailValueObject;
    password?: string | PasswordValueObject;
}
    