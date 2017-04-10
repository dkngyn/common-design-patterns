import {Interviewer} from './Interviewer';

export class Developer implements Interviewer {
  public askQuestions():void {
    console.log('Asking about design patterns');
  }
}
