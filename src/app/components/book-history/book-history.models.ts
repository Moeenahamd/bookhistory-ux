import { EntityBase } from '@bookhistory/shared';
import { name } from '@bookhistory/shared/tools';
@name('BookHistory')
export class BookHistory extends EntityBase {
  bookId?: string;
  isbn?: string;
  timeOfChange?: string;
  change?: string;
}
