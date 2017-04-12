import {Account} from './Account';

export class Bitcoin extends Account {
  protected balance:number;

  public constructor(balance:number) {
    super();
    this.balance = balance;
  }
}
