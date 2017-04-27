import {WritingState} from './WritingState';

export class TextEditor {
  protected state:WritingState;

  public constructor(state:WritingState) {
    this.state = state;
  }

  public setState(state:WritingState) {
    this.state = state;
  }

  public type(words:string) {
    this.state.write(words);
  }
}
