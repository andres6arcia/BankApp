import { EventPublisherBase } from 'src/shared/sofka';
import {
  RoleDomainEntityBase,
  UserDomainEntityBase,
} from '../entities';
import { Topic } from '../events';
import {
  IUserDomainService,
} from '../services';
import { AddRoleHelper } from './helpers/add-role/add-role.helper';

export class UserAggregateRoot
{
  private readonly userService?: IUserDomainService;
  private readonly events: Map<Topic, EventPublisherBase<any>>;

  constructor({
    userService,
    events,
  }: {
    userService?: IUserDomainService;
    events?: Map<Topic, any>;
  }) {
    this.userService = userService;
    this.events = events ?? new Map<Topic, EventPublisherBase<any>>();
  }

  AddRole(
    entity: UserDomainEntityBase,
    role: RoleDomainEntityBase,
  ): Promise<UserDomainEntityBase> {
    return AddRoleHelper(
      entity,
      role,
      this.userService
    );
  }

}
