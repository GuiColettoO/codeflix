import { IRepository } from '../../../shared/domain/repository/repository-interface';
import { Category } from '../category.entity';
import { Uuid } from '../../../shared/domain/value-objects/uuid.vo';

export interface ICategoriesRepository extends IRepository<Category, Uuid> {}