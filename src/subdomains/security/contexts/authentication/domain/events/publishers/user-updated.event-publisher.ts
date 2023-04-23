import { EventPublisherBase } from 'src/shared/sofka';
import { UserDomainEntityBase } from '../../entities';
import { Topic } from './enums';

export abstract class UserUpdatedEventPublisher<
  Response = UserDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.UserUpdated,
      JSON.stringify({ data: this.response }),
    );
  }
}
