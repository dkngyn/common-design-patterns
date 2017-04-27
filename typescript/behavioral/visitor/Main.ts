import {Monkey} from './Monkey';
import {Lion} from './Lion';
import {Dolphin} from './Dolphin';
import {Speak} from './Speak';

let monkey = new Monkey();
let lion = new Lion();
let dolphin = new Dolphin();

let speak = new Speak();

monkey.accept(speak);
lion.accept(speak);
dolphin.accept(speak);
