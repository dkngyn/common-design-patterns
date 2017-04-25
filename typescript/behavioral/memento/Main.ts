import {Editor} from './Editor';

let editor = new Editor();

editor.type('this is the first sentence.');
editor.type('this is the second sentence.');

let saved = editor.save();

editor.type('and this is third sentence.');

console.log(editor.getContent());

editor.restore(saved);

console.log(editor.getContent());
