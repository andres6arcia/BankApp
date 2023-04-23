import { EventPublisherBase } from 'src/shared/sofka';
import { Topic } from './enums';
import { UserDomainEntityBase } from '../../entities';

export abstract class RoleAddedEventPublisher<
  Response = UserDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.RoleAdded,
      JSON.stringify({ data: this.response }),
    );
  }
}
