import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateNewsDto, UpdateNewsDto, CreateNewsResponseDto } from '../core/dtos';
import { NewsUseCases, NewsFactoryService } from '../use-cases/news';

@Controller('api/news')
export class NewsController {
  constructor(
    private newsUseCases: NewsUseCases,
    private newsFactoryService: NewsFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.newsUseCases.getAllNews();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.newsUseCases.getNewsById(id);
  }

  @Post()
  async createBook(@Body() newsDto: CreateNewsDto) : Promise<CreateNewsResponseDto> {
    const createBookResponse = new CreateNewsResponseDto();
    try {
      const book = this.newsFactoryService.createNewNews(newsDto);
      const createdBook = await this.newsUseCases.createNews(book);

      createBookResponse.success = true;
      createBookResponse.createdNews = createdBook;
    } catch (error) {
      // report and log error
      createBookResponse.success = false;
    }

    return createBookResponse;
  }

  @Put(':id')
  updateNews(
    @Param('id') newsId: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    const news = this.newsFactoryService.updateNews(updateNewsDto);
    return this.newsUseCases.updateNews(newsId, news);
  }
}