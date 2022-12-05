import { Module } from '@nestjs/common';
import {
  NewsController
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { NewsUseCasesModule } from './use-cases/news/news-use-cases.module';

@Module({
  imports: [
    DataServicesModule,
    NewsUseCasesModule
  ],
  controllers: [
    
    NewsController,
   
  ],
  providers: [],
})
export class AppModule {}