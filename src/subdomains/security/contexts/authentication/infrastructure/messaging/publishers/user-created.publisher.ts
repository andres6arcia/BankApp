import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { IEventPublisher } from 'src/shared/sofka';
import { UserCreatedEventPublisher } from '../../../domain/events';
import { UserEntity } from '../../persistence/entities/user.entity';

@Injectable()
export class UserCreatedPublisher extends UserCreatedEventPublisher<UserEntity> {
  constructor(@Inject('USERS_CONTEXT') private readonly proxy: ClientProxy) {
    super(proxy as unknown as IEventPublisher);
  }

  emit<Result = any, Input = UserEntity>(
    pattern: any,
    data: Input,
  ): Promise<Result> {
    return lastValueFrom(this.proxy.emit(pattern, data));
  }
}
