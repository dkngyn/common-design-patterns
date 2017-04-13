import {Bulb} from './Bulb';
import {TurnOn} from './TurnOn';
import {TurnOff} from './TurnOff';
import {RemoteControl} from './RemoteControl';

let bulb = new Bulb();

let turnOn = new TurnOn(bulb);
let turnOff = new TurnOff(bulb);

let remote = new RemoteControl();
remote.submit(turnOn);
remote.submit(turnOff);
