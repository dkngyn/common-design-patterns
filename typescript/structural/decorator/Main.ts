import {SimpleCoffee} from './SimpleCoffee';
import {MilkCoffee} from './MilkCoffee';
import {WhipCoffee} from './WhipCoffee';
import {VanillaCoffee} from './VanillaCoffee';

let someCoffee = new SimpleCoffee();
console.log(`${someCoffee.getDescription()}: $${someCoffee.getCost()}`);

someCoffee = new MilkCoffee(someCoffee);
console.log(`${someCoffee.getDescription()}: $${someCoffee.getCost()}`);

someCoffee = new WhipCoffee(someCoffee);
console.log(`${someCoffee.getDescription()}: $${someCoffee.getCost()}`);

someCoffee = new VanillaCoffee(someCoffee);
console.log(`${someCoffee.getDescription()}: $${someCoffee.getCost()}`);
