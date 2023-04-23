import { Module } from '@nestjs/common';
import { UsersController, AuthetinticationController } from './subdomains/security/contexts/authentication/infrastructure/controllers';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { MessagingModule } from './subdomains/security/contexts/authentication/infrastructure/messaging/messaging.module';
import { PersistenceModule } from './subdomains/security/contexts/authentication/infrastructure/persistence/persistence.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'enviroments',
        '.env.develop',
      ),
    }),
    PersistenceModule,
    MessagingModule,
  ],
  controllers: [AuthetinticationController, UsersController],
  providers: [],
})
export class AppModule {}
