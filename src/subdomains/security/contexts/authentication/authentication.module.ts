import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ObjectValueExceptionFilter } from './infrastructure/utils/exception-filters/object-value.exception-filter';
import { AuthetinticationController, UsersController } from './infrastructure/controllers';
import { MessagingModule } from './infrastructure/messaging/messaging.module';
import { PersistenceModule } from './infrastructure/persistence/persistence.module';
import { AuthenticationGuard } from './infrastructure/utils/guards/authentication.guard';

@Module({
  imports: [PersistenceModule, MessagingModule],
  controllers: [AuthetinticationController, UsersController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ObjectValueExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
  ],
  exports: [],
})
export class AuthenticationModule {}

