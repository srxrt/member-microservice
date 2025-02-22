import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'member-client',
          brokers: ['localhost:10000', 'localhost:10001', 'localhost:10002'],
        },
        consumer: {
          groupId: 'member-consumer',
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
