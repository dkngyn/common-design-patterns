import {Observer} from './Observer';
import {JobPost} from './JobPost';

export interface Observable {
  notify(jobPosting:JobPost):void;
  attach(observer:Observer):void;
  add(jobPosting:JobPost):void;
}
