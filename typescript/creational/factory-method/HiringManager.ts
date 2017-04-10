import {Interviewer} from './Interviewer';

export abstract class HiringManager {

  // factory method
  abstract makeInterviewer():Interviewer;

  public takeInterview() {
    const interviewer = this.makeInterviewer(); // using factory method
    interviewer.askQuestions();
  }
}
