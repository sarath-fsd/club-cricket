import { News } from '../../frameworks/data-services/mongo/model';

export class CreateNewsResponseDto {
  success: boolean;

  createdNews: News;
}
