import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { auth } from 'express-openid-connect';
import { LoggerInterceptor } from './subdomains/security/contexts/authentication/utils/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(auth({
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_AUDIENCE,
  }));
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_URL],
      },
      consumer: {
        groupId: process.env.KAFKA_GROUP_ID,
      },
    },
  });
  app.useGlobalInterceptors(new LoggerInterceptor());
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
