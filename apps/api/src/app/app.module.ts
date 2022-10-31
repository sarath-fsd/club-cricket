import { CoreModule } from '@cricket-app/core';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheService, TypeormService } from './config';
import { NewsController } from './modules/news/news.controller';
import { NewsModule } from './modules/news/news.module';
import { NewsService } from './modules/news/news.service';

@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),
    CacheModule.registerAsync({
      useClass: CacheService,
    }),
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
