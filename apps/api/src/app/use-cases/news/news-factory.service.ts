import { Injectable } from '@nestjs/common';
import { News } from '../../core/entities';
import {  CreateNewsDto, UpdateNewsDto } from '../../core/dtos';

@Injectable()
export class NewsFactoryService {
  createNewNews(createNewsDto: CreateNewsDto) {
    const newNews = new News();
    newNews.title = createNewsDto.title;
    newNews.description = createNewsDto.description;
    newNews.image = createNewsDto.image;
    newNews.url = createNewsDto.url;

    return newNews;
  }

  updateNews(updateNewsDto: UpdateNewsDto) {
    const newNews = new News();
    newNews.title = updateNewsDto.title;
    newNews.description = updateNewsDto.description;
    newNews.image = updateNewsDto.image;
    newNews.url = updateNewsDto.url;

    return newNews;
  }
}