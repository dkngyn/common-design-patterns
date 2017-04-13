import {Command} from './Command';
import {Bulb} from './Bulb';

export class TurnOn implements Command {
  protected bulb:Bulb;

  public constructor(bulb:Bulb) {
    this.bulb = bulb;
  }

  public execute():void {
    this.bulb.turnOn();
  }

  public undo():void {
    this.bulb.turnOff();
  }

  public redo():void {
    this.execute();
  }
}
