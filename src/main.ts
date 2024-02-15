import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import *  as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import * as express from 'express';
import { RequestContextMiddleware } from './middleware';
import { AllExceptionsFilter } from './filters/all-exceptions-filter';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('PUSHPAK-RAIL API Docs')
    .setDescription('The PUSHPAK-RAIL API description')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(RequestContextMiddleware);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use('/public', express.static(join(__dirname, '..', 'public')))
  await app.listen(process.env.APP_PORT || 3017, '0.0.0.0');
}
bootstrap();
