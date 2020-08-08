import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
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
}
