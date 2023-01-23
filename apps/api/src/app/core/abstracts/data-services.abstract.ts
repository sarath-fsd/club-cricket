import { News } from '../../frameworks/data-services/mongo/model';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract news: IGenericRepository<News>;
}
