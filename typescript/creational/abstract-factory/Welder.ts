import {DoorFittingExpert} from './DoorFittingExpert';

export class Welder implements DoorFittingExpert {
  public getDescription():void {
    console.log('I can only fit iron doors');
  }
}
