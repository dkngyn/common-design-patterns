import {Employee} from './Employee';

export class Designer implements Employee {
  protected name:string;
  protected salary:number;
  protected roles:Array<string>;

  public constructor(name:string, salary:number) {
    this.name = name;
    this.salary = salary;
    this.roles = ["designer"];
  }

  public getName():string {
    return this.name;
  }

  public setSalary(salary:number):void {
    this.salary = salary;
  }

  public getSalary():number {
    return this.salary;
  }

  public getRoles():Array<string> {
    return this.roles;
  }
}
