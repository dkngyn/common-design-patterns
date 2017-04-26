import {JobSeeker} from './JobSeeker';
import {JobPostings} from './JobPostings';
import {JobPost} from './JobPost';

// create subscribers
let john = new JobSeeker('John Doe');
let jane = new JobSeeker('Jane Doe');

// create publisher and attach subscribers
let jobPostings = new JobPostings();
jobPostings.attach(john);
jobPostings.attach(jane);

// add a new job posting and see if subscribers get notified
jobPostings.add(new JobPost('Software Engineer'));
