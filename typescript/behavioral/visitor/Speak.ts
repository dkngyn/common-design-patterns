import {AnimalOperation} from './AnimalOperation';
import {Monkey} from './Monkey';
import {Lion} from './Lion';
import {Dolphin} from './Dolphin';

export class Speak implements AnimalOperation {
  public visitMonkey(monkey:Monkey):void {
    monkey.shout();
  }

  public visitLion(lion:Lion):void {
    lion.roar();
  }

  public visitDolphin(dolphin:Dolphin):void {
    dolphin.speak();
  }
}
