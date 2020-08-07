import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  templateUrl: './employee-tiles.component.html',
  styleUrls: ['./employee-tiles.component.css']
})
export class EmployeeTilesComponent implements OnInit {
  errorMsg: string;
  employees: Array<Employee>;
  selectedEmployee: Employee;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    const employees$ = this.service.getEmployees();
    employees$.subscribe(
      employees => this.employees = employees,
      err => this.errorMsg = err.message
    );
  }

  notifySeeDetail(employee: Employee) : void {
    console.log(employee);
    this.selectedEmployee = employee;
  }
}
