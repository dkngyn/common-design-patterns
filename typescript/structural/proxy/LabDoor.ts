import {Door} from './Door';

export class LabDoor implements Door {
  public open():void {
    console.log('opening lab door');
  }

  public close():void {
    console.log('closing lab door');
  }
}
