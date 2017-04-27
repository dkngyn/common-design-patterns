import {Animal} from './Animal';
import {AnimalOperation} from './AnimalOperation';

export class Lion implements Animal {
  public roar() {
    console.log('Roaaaaar!');
  }

  public accept(operation:AnimalOperation) {
    operation.visitLion(this);
  }
}
