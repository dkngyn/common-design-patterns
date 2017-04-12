export abstract class Account {
  protected successor:Account;
  protected balance:number;

  public setNext(account:Account):void {
    this.successor = account;
  }

  public pay(amountToPay:number):void {
    let instance:any = this.constructor;

    if (this.canPay(amountToPay)) {
      console.log(`paid ${amountToPay} using ${instance.name}`);
    } else if (this.successor) {
      console.log(`cannot pay using ${instance.name}. proceeding...`);
      this.successor.pay(amountToPay);
    } else {
      console.log('none of the accounts have enough balance');
    }
  }

  public canPay(amount:number):boolean {
    return this.balance >= amount;
  }
}
