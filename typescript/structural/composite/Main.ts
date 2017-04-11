import {Developer} from './Developer';
import {Designer} from './Designer';
import {Organization} from './Organization';

let john = new Developer('John Doe', 12000);
let jane = new Designer('Jane Done', 15000);

let organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log('net salary:', organization.getNetSalaries());
