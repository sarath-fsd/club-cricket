import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { News, NewsDocument } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  news: MongoGenericRepository<News>;

  constructor(
    @InjectModel(News.name)
    private NewsRepository: Model<News>
  ) {}

  onApplicationBootstrap() {
    this.news = new MongoGenericRepository<News>(this.NewsRepository);
  }
}
