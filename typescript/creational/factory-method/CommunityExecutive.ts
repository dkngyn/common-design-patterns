import {Interviewer} from './Interviewer';

export class CommunityExecutive implements Interviewer {
  public askQuestions():void {
    console.log('Asking about comunity building');
  }
}
