import {ChatRoom} from './ChatRoom';
import {User} from './User';

let mediator = new ChatRoom();

let john = new User('John Doe', mediator);
let jane = new User('Jane Doe', mediator);

john.send('Hi there!');
jane.send('Heey!');
