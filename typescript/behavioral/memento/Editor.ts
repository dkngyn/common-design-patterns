import {EditorMemento} from './EditorMemento';

export class Editor {
  protected content:string;

  public constructor() {
    this.content = '';
  }

  public type(words:string):void {
    this.content = `${this.content} ${words}`;
  }

  public getContent():string {
    return this.content;
  }

  public save():EditorMemento {
    return new EditorMemento(this.content);
  }

  public restore( memento:EditorMemento):void {
    this.content = memento.getContent();
  }
}
