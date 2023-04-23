import { AggregateRootException } from 'src/shared/sofka';
import { RoleDomainEntityBase, UserDomainEntityBase } from '../../../entities';
import { IUserDomainService } from '../../../services';
import { RoleAddedEventPublisher } from '../../../events/publishers';

export const AddRoleHelper = async (
  entity: UserDomainEntityBase,
  role: RoleDomainEntityBase,
  service?: IUserDomainService,
  event?: RoleAddedEventPublisher,
): Promise<UserDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'IUserDomainService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'RoleAddedEventPublisher no se encuentra definido',
    );

  // Valido que el rol que voy a adicionar no exista para evitar duplicarlo
  if (entity.roles) {
    if (!entity.roles.some(existingRole => existingRole.roleId === role.roleId)) {
      entity.addRole(role);
    }
  } else {
    entity.addRole(role);
  }

  event.response = entity;
  event.publish();
  return event.response;
};
