import {DoorFactory} from './DoorFactory';
import {Door} from './Door';
import {IronDoor} from './IronDoor';
import {DoorFittingExpert} from './DoorFittingExpert';
import {Welder} from './Welder';

// Iron door factory to get iron door and the relevant fitting expert
export class IronDoorFactory implements DoorFactory {
  public makeDoor():Door {
    return new IronDoor();
  }

  public makeFittingExpert():DoorFittingExpert {
    return new Welder();
  }
}
