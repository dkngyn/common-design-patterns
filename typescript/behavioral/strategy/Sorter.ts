import {SortStrategy} from './SortStrategy';

export class Sorter {
  protected sorter:SortStrategy;

  public constructor(sorter:SortStrategy) {
    this.sorter = sorter;
  }

  public sort(dataset:Array<any>):Array<any> {
    return this.sorter.sort(dataset);
  }
}
