import { Module } from '@nestjs/common';
import { CoreModule } from '@cricket-app/core';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { NewsService } from '../services/news/news.service';
import { NewsController } from '../controllers/news/news.controller';

@Module({
  imports: [CoreModule],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
