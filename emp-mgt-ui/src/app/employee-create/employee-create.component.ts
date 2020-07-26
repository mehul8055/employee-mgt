import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee;

  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee(){
    console.log(this.employee);
    this.service.createEmployee(this.employee);
    this.employee = null;

  }
}
