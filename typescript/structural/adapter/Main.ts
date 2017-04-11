import {WildDog} from './WildDog';
import {WildDogAdapter} from './WildDogAdapter';
import {Hunter} from './Hunter';

let wildDog = new WildDog();
let wildDogAdapter = new WildDogAdapter(wildDog);

let hunter = new Hunter();
hunter.hunt(wildDogAdapter);
