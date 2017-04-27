import {AnimalOperation} from './AnimalOperation';

// Visitee
export interface Animal {
  accept(operation:AnimalOperation):void;
}
