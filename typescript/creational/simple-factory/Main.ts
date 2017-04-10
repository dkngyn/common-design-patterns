import {DoorFactory} from './DoorFactory';

let door = DoorFactory.makeDoor(100, 200);
console.log('door width:', door.getWidth());
console.log('door height:', door.getHeight());
