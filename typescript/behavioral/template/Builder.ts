export abstract class Builder {
  // template methods
  build():void {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  }

  abstract test():void;
  abstract lint():void;
  abstract assemble():void;
  abstract deploy():void;
}
