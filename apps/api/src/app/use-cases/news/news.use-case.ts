import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts';
import { News } from '../../core/entities';

@Injectable()
export class NewsUseCases {
  constructor(private dataServices: IDataServices) {}

  getAllNews(): Promise<News[]> {
    return this.dataServices.news.getAll();
  }

  getNewsById(id: any): Promise<News> {
    return this.dataServices.news.get(id);
  }

  async createNews(news: News): Promise<News> {
    try {
      // call to our dependencies
      const createdNews = await this.dataServices.news.create(news);

      return createdNews;
    } catch (error) {
      throw error;
    }
  }

  updateNews(newsId: string, news: News): Promise<News> {
    return this.dataServices.news.update(newsId, news);
  }
}
