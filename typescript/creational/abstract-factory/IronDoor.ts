import {Door} from './Door';

export class IronDoor implements Door {
  public getDescription():void {
    console.log('I am an iron door');
  }
}
