import {Coffee} from './Coffee';

export class WhipCoffee implements Coffee {
  protected coffee:Coffee;

  public constructor(coffee:Coffee) {
    this.coffee = coffee;
  }

  public getCost():number {
    return this.coffee.getCost() + 5;
  }

  public getDescription():string {
    return `${this.coffee.getDescription()}, whip`;
  }
}
