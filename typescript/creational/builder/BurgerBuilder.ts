import {Burger} from './Burger';

export class BurgerBuilder {
  public size:number;

  public cheese:boolean = false;
  public pepperoni:boolean = false;
  public lettuce:boolean = false;
  public tomato:boolean = false;

  public constructor(size:number) {
    this.size = size;
  }

  public addCheese():BurgerBuilder {
    this.cheese = true;
    return this;
  }

  public addPepperoni():BurgerBuilder {
    this.pepperoni = true;
    return this;
  }

  public addLettuce():BurgerBuilder {
    this.lettuce = true;
    return this;
  }

  public addTomato():BurgerBuilder {
    this.tomato = true;
    return this;
  }

  public build():Burger {
    return new Burger(this);
  }
}
