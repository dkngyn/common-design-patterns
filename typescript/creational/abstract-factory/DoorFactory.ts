import {Door} from './Door';
import {DoorFittingExpert} from './DoorFittingExpert';

export interface DoorFactory {
  makeDoor():Door;
  makeFittingExpert():DoorFittingExpert;
}
