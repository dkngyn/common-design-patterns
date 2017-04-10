import {DoorFactory} from './DoorFactory';
import {Door} from './Door';
import {WoodenDoor} from './WoodenDoor';
import {DoorFittingExpert} from './DoorFittingExpert';
import {Carpenter} from './Carpenter';

// Wooden factory to return carpenter and wooden door
export class WoodenDoorFactory implements DoorFactory {
  public makeDoor():Door {
    return new WoodenDoor();
  }

  public makeFittingExpert():DoorFittingExpert {
    return new Carpenter();
  }
}
