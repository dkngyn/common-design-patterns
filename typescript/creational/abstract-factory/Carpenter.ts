import {DoorFittingExpert} from './DoorFittingExpert';

export class Carpenter implements DoorFittingExpert {
  public getDescription():void {
    console.log('I can only fit wooden doors');
  }
}
