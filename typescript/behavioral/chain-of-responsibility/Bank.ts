import {Account} from './Account';

export class Bank extends Account {
  protected balance:number;

  public constructor(balance:number) {
    super();
    this.balance = balance;    
  }
}
