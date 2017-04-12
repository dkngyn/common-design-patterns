import {TeaMaker} from './TeaMaker';

export class TeaShop {
  protected orders:Object;
  protected teaMaker:TeaMaker;

  public constructor(teaMaker:TeaMaker) {
    this.orders = {};
    this.teaMaker = teaMaker;
  }

  public takeOrder(teaType:string, table:number):void {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  public serve():void {
    const teas = this.teaMaker.getAvailableTea();
    for(let table in this.orders) {
      console.log(`serving tea to table# ${table} with`, this.orders[table]);
    }
  }
}
