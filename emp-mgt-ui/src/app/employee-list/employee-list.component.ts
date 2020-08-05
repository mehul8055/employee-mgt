import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Array<Employee>;
  selectedEmployee: Employee;

  constructor(public service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
      
  }

  notifySeeDetail(employee: Employee) : void {
    console.log(employee);
    this.selectedEmployee = employee;
  }
}
