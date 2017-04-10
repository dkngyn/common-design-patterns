import {Sheep} from './Sheep';

const original = new Sheep('Jolly');
// console.log(original);
console.log(original.getName());
console.log(original.getCategory());

const cloned = (<any>Object).assign(Object.create(original),original);
// console.log(cloned);
cloned.setName('Dolly');
console.log(cloned.getName());
console.log(cloned.getCategory());
