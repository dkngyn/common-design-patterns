import {Interviewer} from './Interviewer';
import {HiringManager} from './HiringManager';
import {CommunityExecutive} from './CommunityExecutive';

export class MarketingManager extends HiringManager {
  public makeInterviewer():Interviewer {
    return new CommunityExecutive();
  }
}
