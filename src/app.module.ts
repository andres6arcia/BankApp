import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { AuthenticationModule } from './subdomains/security/contexts/authentication/authentication.module';

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
    AuthenticationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
