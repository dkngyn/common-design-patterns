import {Computer} from './Computer';
import {ComputerFacade} from './ComputerFacade';

let computer = new ComputerFacade(new Computer());
computer.turnOn();
computer.turnOff();
