import {BurgerBuilder} from './BurgerBuilder';

let burgerBuilder = new BurgerBuilder(14);
let burger = burgerBuilder.build();
console.log(burger);

burger = burgerBuilder.addLettuce().addTomato().build();
console.log(burger);
