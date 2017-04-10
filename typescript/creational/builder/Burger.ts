import {BurgerBuilder} from './BurgerBuilder';

export class Burger {
  protected size:number;

  protected cheese:boolean = false;
  protected pepperoni:boolean = false;
  protected lettuce:boolean = false;
  protected tomato:boolean = false;

  public constructor(builder:BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }  
}
