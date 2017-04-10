import {President} from './President';

const president1 = President.getInstance();
const president2 = President.getInstance();

console.log(president1 === president2);
