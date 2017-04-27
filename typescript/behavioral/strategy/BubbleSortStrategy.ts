import {SortStrategy} from './SortStrategy';

export class BubbleSortStrategy implements SortStrategy {
  public sort(dataset:Array<any>):Array<any> {
    console.log('sorting using bubble sort');
    return dataset;
  }
}
