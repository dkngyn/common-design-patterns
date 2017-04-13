import {Command} from './Command';
import {Bulb} from './Bulb';

export class TurnOff implements Command {
  protected bulb:Bulb;

  public constructor(bulb:Bulb) {
    this.bulb = bulb;
  }

  public execute():void {
    this.bulb.turnOff();
  }

  public undo():void {
    this.bulb.turnOn();
  }

  public redo():void {
    this.execute();
  }
}
