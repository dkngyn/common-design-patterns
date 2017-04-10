import {Door} from './Door';
import {WoodenDoor} from './WoodenDoor';

export class DoorFactory {
  public static makeDoor(width:number, height:number):Door {
    return new WoodenDoor(width, height);
  }
}
