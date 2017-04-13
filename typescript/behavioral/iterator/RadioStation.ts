export class RadioStation {
  protected frequency:number;

  public constructor(frequency:number) {
    this.frequency = frequency;
  }

  public getFrequency():number {
    return this.frequency;
  }
}
