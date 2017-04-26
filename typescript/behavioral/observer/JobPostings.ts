import {Observable} from './Observable';
import {Observer} from './Observer';
import {JobPost} from './JobPost';

export class JobPostings implements Observable {
  protected observers:Array<Observer>;

  public constructor() {
    this.observers = [];
  }

  public notify(jobPosting:JobPost):void {
    this.observers.forEach(observer => {
      observer.onJobPosted(jobPosting);
    });
  }

  public attach(observer:Observer):void {
    this.observers.push(observer);
  }

  public add(jobPosting:JobPost):void {
    this.notify(jobPosting);
  }
}
