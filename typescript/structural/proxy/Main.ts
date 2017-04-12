import {LabDoor} from  './LabDoor';
import {Security} from './Security';

let door = new Security(new LabDoor());

door.open('invalid');

door.open('$ecr@t');

door.close();
