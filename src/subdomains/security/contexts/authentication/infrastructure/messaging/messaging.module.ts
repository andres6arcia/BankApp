import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserCreatedPublisher } from './publishers/user-created.publisher';
import { UserCreatedController } from './subscribers/user-created.subscriber';
import { RoleAddedPublisher } from './publishers/role-added.publisher';
import { RoleAddedController } from './subscribers/role-added.subscriber';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_CONTEXT',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9091'],
          },
        },
      },
    ]),
  ],
  controllers: [UserCreatedController, RoleAddedController],
  providers: [UserCreatedPublisher, RoleAddedPublisher],
  exports: [UserCreatedPublisher, RoleAddedPublisher],
})
export class MessagingModule {}
