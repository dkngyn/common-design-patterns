export interface Employee {
  // constructor(name:string, salary:number);
  getName():string;
  setSalary(salary:number):void;
  getSalary():number;
  getRoles():Array<string>;
}
