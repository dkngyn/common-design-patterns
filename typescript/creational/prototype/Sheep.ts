export class Sheep {
  protected name:string;
  protected category:string;

  public constructor(name:string, category:string = 'Mountain Sheep') {
    this.name = name;
    this.category = category;
  }

  public setName(name:string):void {
    this.name = name;
  }

  public getName():string {
    return this.name;
  }

  public setCategory(category:string):void {
    this.category = category;
  }

  public getCategory():string {
    return this.category;
  }
}
