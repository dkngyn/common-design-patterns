import {Monkey} from './Monkey';
import {Lion} from './Lion';
import {Dolphin} from './Dolphin';

// Visitor
export interface AnimalOperation {
  visitMonkey(monkey:Monkey):void;
  visitLion(lion:Lion):void;
  visitDolphin(dolphin:Dolphin):void;
}
