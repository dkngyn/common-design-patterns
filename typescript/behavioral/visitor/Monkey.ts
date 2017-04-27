import {Animal} from './Animal';
import {AnimalOperation} from './AnimalOperation';

export class Monkey implements Animal {
  public shout() {
    console.log('Ooh oo aa aa!');
  }

  public accept(operation:AnimalOperation):void {
    operation.visitMonkey(this);
  }
}
