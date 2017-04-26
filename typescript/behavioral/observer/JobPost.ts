export class JobPost {
  protected title:string;

  public constructor(title:string) {
    this.title = title;
  }

  public getTitle():string {
    return this.title;
  }
}
