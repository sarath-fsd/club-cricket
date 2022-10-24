import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateNewsDto } from '../../dtos/create-news.dto';
import { ObjectId } from 'mongoose';

import { NewsService } from '../../services/news/news.service';

import { Response } from 'express';

import * as _ from 'lodash';
import { NewsDto } from '../../dtos/news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async findAll() {
    return await this.newsService.fetchData();
  }

  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.newsService.fetchDataByTitle(title);
  }

  @Post()
  async create(@Body() createNewsDto: CreateNewsDto, @Res() res: Response) {
    const { title } = createNewsDto;
    let news = await this.newsService.fetchDataByTitle(title);
    if (news) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(`News with the ${title} already registered.`);
    }

    news = await this.newsService.create(createNewsDto);

    res
      .status(HttpStatus.CREATED)
      .send(_.pick(news, ['_id', 'title', 'description', 'image', 'url']));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNewsDto: CreateNewsDto,
    @Res() res: Response
  ) {
    const news = await this.newsService.fetchDataByIdAndUpdate(
      id,
      updateNewsDto
    );

    if (!news)
      return res.status(404).send('The news with the given ID was not found.');

    res.send(news);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const news = await this.newsService.fetchDataByIdAndRemove(id);

    if (!news)
      return res.status(404).send('The news with the given ID was not found.');

    res.send(news);
  }
}
