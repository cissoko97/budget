import { IItem } from './IItem';

export interface UpdateEvent {
  old?: IItem;
  new?: IItem;
}
