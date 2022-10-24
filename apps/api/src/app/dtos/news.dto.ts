import { ObjectId } from 'mongoose';
import { CreateNewsDto } from './create-news.dto';

export class NewsDto extends CreateNewsDto {
  id: ObjectId;
}
