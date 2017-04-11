import {Employee} from './Employee';

export class Organization {
  protected employees:Array<Employee>;

  public constructor() {
    this.employees = [];
  }

  public addEmployee(employee:Employee):void {
    this.employees.push(employee);
  }

  public getNetSalaries():number {
    let netSalary = 0;

    this.employees.forEach((employee) => {
      netSalary += employee.getSalary();
    });

    return netSalary;
  }
}
