import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee(){
    console.log(this.employee);
    this.service.createEmployee(this.employee).subscribe(msg => {
      console.log(msg);
    });
  }
  
}
