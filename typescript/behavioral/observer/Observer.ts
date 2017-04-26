import {JobPost} from './JobPost';

export interface Observer {
  onJobPosted(job:JobPost):void;
}
