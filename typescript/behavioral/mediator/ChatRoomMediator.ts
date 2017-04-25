import {User} from './User';

export interface ChatRoomMediator {
  showMessage(user:User, message:string):void;
}
