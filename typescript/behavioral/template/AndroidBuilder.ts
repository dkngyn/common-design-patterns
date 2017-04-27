import {Builder} from './Builder';

export class AndroidBuilder extends Builder {
  public test():void {
    console.log('running android tests');
  }

  public lint():void {
    console.log('linting the android code');
  }

  public assemble():void {
    console.log('assembling the android build');
  }

  public deploy():void {
    console.log('deploying android build to server');
  }
}
