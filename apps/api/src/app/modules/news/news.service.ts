import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from './dtos/create-news.dto';
import { NewsDto } from './dtos/news.dto';
import { NewsEntity } from './entities/news';
import { MongoRepository, ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';

type News = any;

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: MongoRepository<NewsEntity>
  ) {}

  async findAll() {
    return await this.newsRepository.find({
      cache: true,
    });
  }

  async findById(_id: string): Promise<NewsEntity> {
    return await this.newsRepository.findOneBy({ _id: _id });
  }

  async findByTitle(title: string): Promise<NewsEntity> {
    return await this.newsRepository.findOneBy({ title });
  }

  async create(input: CreateNewsDto): Promise<NewsEntity> {
    const { title, description, image, url } = input;

    const news = new NewsEntity();
    news.title = title;
    news.description = description;
    news.image = image;
    news.url = url;

    return await this.newsRepository.save(news);
  }

  async update(_id: string, input: NewsDto): Promise<NewsEntity> {
    const { title, description, image, url } = input;

    const news = await this.newsRepository.findOneAndUpdate(
      { _id },
      { $set: { title, description, image, url } },
      { upsert: true }
    );

    return news.value;
  }

  async delete(_id: string): Promise<boolean> {
    const site = await this.findById(_id);
    return (await this.newsRepository.remove(site)) ? true : false;
  }

  async deleteAll(): Promise<boolean> {
    return (await this.newsRepository.deleteMany({})) ? true : false;
  }
}
