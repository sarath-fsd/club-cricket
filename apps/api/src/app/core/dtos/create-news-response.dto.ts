import { News } from '../entities';

export class CreateNewsResponseDto {
  success: boolean;

  createdNews: News;
}