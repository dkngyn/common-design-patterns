import {Coffee} from './Coffee';

export class SimpleCoffee implements Coffee {

  public getCost():number {
    return 10;
  }

  public getDescription():string {
    return `simple coffee`;
  }
}
