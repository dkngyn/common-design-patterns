import {TextEditor} from './TextEditor';
import {Default} from './Default';
import {Uppercase} from './Uppercase';
import {Lowercase} from './Lowercase';

let editor = new TextEditor(new Default());

editor.type('First line');

editor.setState(new Uppercase());
editor.type('Second line');
editor.type('Third line');

editor.setState(new Lowercase());
editor.type('Fourth line');
editor.type('Fifth line');
