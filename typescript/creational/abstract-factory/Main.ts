import {WoodenDoorFactory} from './WoodenDoorFactory';
import {IronDoorFactory} from './IronDoorFactory';

let woodenDoorFactory = new WoodenDoorFactory();
let door = woodenDoorFactory.makeDoor();
let expert = woodenDoorFactory.makeFittingExpert();
door.getDescription();
expert.getDescription();

let ironDoorFactory = new IronDoorFactory();
let door2 = ironDoorFactory.makeDoor();
let expert2 = ironDoorFactory.makeFittingExpert();
door2.getDescription();
expert2.getDescription();
