import {Coffee} from './Coffee';

export class VanillaCoffee implements Coffee {
  protected coffee:Coffee;

  public constructor(coffee:Coffee) {
    this.coffee = coffee;
  }

  public getCost():number {
    return this.coffee.getCost() + 3;
  }

  public getDescription():string {
    return `${this.coffee.getDescription()}, vanilla`;
  }
}
