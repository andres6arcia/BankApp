import { AggregateRootException } from 'src/shared/sofka';
import { RoleDomainEntityBase, UserDomainEntityBase } from '../../../entities';
import { IUserDomainService } from '../../../services';

export const AddRoleHelper = async (
  entity: UserDomainEntityBase,
  role: RoleDomainEntityBase,
  service?: IUserDomainService
): Promise<UserDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'IUserDomainService no se encuentra definido',
    );

  // Valido que el rol que voy a adicionar no exista para evitar duplicarlo
  if (entity.roles) {
    if (!entity.roles.some(existingRole => existingRole.roleId === role.roleId)) {
      entity.addRole(role);
    }
  } else {
    entity.addRole(role);
  }

  return entity;
};
