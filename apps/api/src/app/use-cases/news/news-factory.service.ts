import { Injectable } from '@nestjs/common';

import { CreateNewsDto, UpdateNewsDto } from '../../core/dtos';
import { News } from '../../frameworks/data-services/mongo/model';

@Injectable()
export class NewsFactoryService {
  createNewNews(createNewsDto: CreateNewsDto) {
    const newNews = new News();
    newNews.title = createNewsDto.title;
    newNews.description = createNewsDto.description;
    newNews.image = createNewsDto.image;
    newNews.imageLabel = createNewsDto.imageLabel;
    newNews.createdBy = createNewsDto.createdBy;
    newNews.updatedBy = createNewsDto.updatedBy;

    return newNews;
  }

  updateNews(updateNewsDto: UpdateNewsDto) {
    const newNews = new News();
    newNews.title = updateNewsDto.title;
    newNews.description = updateNewsDto.description;
    newNews.image = updateNewsDto.image;
    newNews.imageLabel = updateNewsDto.imageLabel;
    newNews.updatedBy = updateNewsDto.updatedBy;

    return newNews;
  }
}
