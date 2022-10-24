import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateNewsDto } from '../../dtos/create-news.dto';
import { NewsDto } from '../../dtos/news.dto';
import { News } from '../../models/news';

@Injectable()
export class NewsService {
  async fetchData() {
    const news = await News.find().select('-__v').sort('title');
    return news;
  }

  async fetchDataById(id: string) {
    const news = await News.findById(id).select('-__v');
    return news;
  }

  async fetchDataByTitle(title: string) {
    const news = await News.findOne({ title });
    return news;
  }

  async create(createNewsDto: CreateNewsDto) {
    const news = new News(createNewsDto);
    return await news.save();
  }

  async fetchDataByIdAndUpdate(
    id: string,
    { title, description, image, url }: CreateNewsDto
  ) {
    const news = await News.findByIdAndUpdate(
      id,
      { title, description, image, url },
      {
        new: true,
      }
    );

    return news;
  }

  async fetchDataByIdAndRemove(id: string) {
    const news = await News.findByIdAndRemove(id);
    return news;
  }
}
