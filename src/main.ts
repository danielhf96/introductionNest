import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // Esto se agrega, para que cuando un campo sea opcional, no lo coloque como undefined
      transformOptions: {
        exposeUnsetFields: false
      }
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
