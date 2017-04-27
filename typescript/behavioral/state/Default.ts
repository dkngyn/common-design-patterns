import {WritingState} from './WritingState';

export class Default implements WritingState {
  public write(words:string) {
    console.log(words);
  }
}
