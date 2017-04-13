import {Command} from './Command';

// invoker
export class RemoteControl {
  public submit(command:Command):void {
    command.execute();
  }
}
