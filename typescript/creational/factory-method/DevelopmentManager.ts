import {Interviewer} from './Interviewer';
import {HiringManager} from './HiringManager';
import {Developer} from './Developer';

export class DevelopmentManager extends HiringManager {
  public makeInterviewer():Interviewer {
    return new Developer();
  }
}
