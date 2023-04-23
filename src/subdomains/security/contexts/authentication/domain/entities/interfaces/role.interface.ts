import { RoleIdValueObject, NameValueObject, DescriptionValueObject } from "../../value-objects/role";
import { IUserDomainEntity } from "./user.interface";

export interface IRoleDomainEntity {
    roleId?: string | RoleIdValueObject;
    name?: string | NameValueObject;
    description?: string | DescriptionValueObject;
    users?: IUserDomainEntity[];
}
  