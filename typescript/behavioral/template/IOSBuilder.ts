import {Builder} from './Builder';

export class IOSBuilder extends Builder {
  public test():void {
    console.log('running iOS tests');
  }

  public lint():void {
    console.log('linting the iOS code');
  }

  public assemble():void {
    console.log('assembling the iOS build');
  }

  public deploy():void {
    console.log('deploying iOS build to server');
  }
}
