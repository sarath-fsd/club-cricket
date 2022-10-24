/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/modules/app.module';

import { ConfigService } from '@nestjs/config';

import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const db: string = config.get('db');
  mongoose.connect(db).then(() => Logger.log(`Connected to ${db}...`));

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = config.get('port');
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`Running in ${config.get('environment')} mode`);
}

bootstrap();
