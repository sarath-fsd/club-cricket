import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { NewsFactoryService } from './news-factory.service';
import { NewsUseCases } from './news.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [NewsFactoryService, NewsUseCases],
  exports: [NewsFactoryService, NewsUseCases],
})
export class NewsUseCasesModule {}
