import {Animal} from './Animal';
import {AnimalOperation} from './AnimalOperation';

export class Dolphin implements Animal {
  public speak() {
    console.log('Tuut tuttu tuutt!');
  }

  public accept(operation:AnimalOperation) {
    operation.visitDolphin(this);
  }
}
