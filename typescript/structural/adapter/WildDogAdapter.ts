import {Lion} from './Lion';
import {WildDog} from './WildDog';

export class WildDogAdapter implements Lion {
  protected dog:WildDog;

  public constructor(dog:WildDog) {
    this.dog = dog;
  }

  public roar():void {
    this.dog.bark();
  }
}
