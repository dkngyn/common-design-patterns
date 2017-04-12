import {Account} from './Account';

export class Paypal extends Account {
  protected balance:number;

  public constructor(balance:number) {
    super();
    this.balance = balance;
  }
}
