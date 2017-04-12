import {Door} from './Door';

export class Security {
  protected door:Door;

  public constructor(door:Door) {
    this.door = door;
  }

  public open(password:string):void {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('big no! it aint possible.');
    }
  }

  public close():void {
    this.door.close();
  }

  public authenticate(password:string):boolean {
    return password === '$ecr@t';
  }
}
