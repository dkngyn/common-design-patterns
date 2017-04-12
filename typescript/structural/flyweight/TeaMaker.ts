import {KarakTea} from './KarakTea';

export class TeaMaker {
  protected availableTea:Object;

  public constructor() {
    this.availableTea = {};
  }

  public make(preference:string):string {
    if (!this.availableTea[preference]) {
      this.availableTea[preference] = new KarakTea(preference);
    }
    return this.availableTea[preference];
  }

  public getAvailableTea():Object {
    return this.availableTea;
  }
}
