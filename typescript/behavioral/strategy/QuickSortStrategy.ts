import {SortStrategy} from './SortStrategy';

export class QuickSortStrategy implements SortStrategy {
  public sort(dataset:Array<any>):Array<any> {
    console.log('sorting using quick sort');
    return dataset;
  }
}
