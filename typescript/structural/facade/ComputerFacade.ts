import {Computer} from './Computer';

export class ComputerFacade {
  protected computer:Computer;

  public constructor(computer:Computer) {
    this.computer = computer;
  }

  public turnOn():void {
    this.computer.getElectrickShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  public turnOff():void {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}
