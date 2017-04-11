import {About} from './About';
import {Careers} from './Careers';
import {DarkTheme} from './DarkTheme';

const darkTheme = new DarkTheme();

let about = new About(darkTheme);
let careers = new Careers(darkTheme);

console.log(about.getContent());
console.log(careers.getContent());
