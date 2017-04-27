import {WritingState} from './WritingState';

export class Lowercase implements WritingState {
  public write(words:string) {
    console.log(words.toLowerCase());
  }
}
