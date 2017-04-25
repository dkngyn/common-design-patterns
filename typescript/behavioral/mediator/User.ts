import {ChatRoomMediator} from './ChatRoomMediator';

export class User {
  protected name:string;
  protected chatMediator:ChatRoomMediator;

  public constructor(name:string, chatMediator:ChatRoomMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }

  public getName():string {
    return this.name;
  }

  public send(message:string):void {
    this.chatMediator.showMessage(this, message);
  }
}
