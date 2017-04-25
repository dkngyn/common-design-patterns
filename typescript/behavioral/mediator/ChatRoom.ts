import {ChatRoomMediator} from './ChatRoomMediator';
import {User} from './User';

export class ChatRoom implements ChatRoomMediator {
  public showMessage(user:User, message:string):void {
    let time = new Date();
    let sender = user.getName();

    console.log(`[${time.toLocaleString()}][${sender}]: ${message}`);
  }
}
