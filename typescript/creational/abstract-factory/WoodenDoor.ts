import {Door} from './Door';

export class WoodenDoor implements Door {
  public getDescription():void {
    console.log('I am a wooden door');
  }
}
