import {Observer} from './Observer';
import {JobPost} from './JobPost';

export class JobSeeker implements Observer {
    protected name:string;

    public constructor(name:string) {
      this.name = name;
    }

    public onJobPosted(job:JobPost):void {
        console.log(`Hi ${this.name}! New job posted: ${job.getTitle()}`);
    }
}
