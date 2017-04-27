import {WritingState} from './WritingState';

export class Uppercase implements WritingState {
  public write(words:string):void {
    console.log(words.toUpperCase());
  }
}
