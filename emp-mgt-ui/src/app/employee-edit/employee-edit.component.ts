import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription, fromEvent, merge } from 'rxjs';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {
  pageTitle = 'Employee Edit';
  errorMessage: string;
  successMessage: string;
  
  employee: Employee = new Employee();
  private sub: Subscription;

  departments: Array<string>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: EmployeeService) { }

  ngOnInit(): void {
    // Read the employee Id from the route parameter
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getemployee(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getemployee(id: number): void {
    if (id === 0) {
      this.employee.id = 0;
      this.displayEmployee(this.employee)
    }else{
      this.service.getEmployee(id)
        .subscribe(
          (employee: Employee) => this.displayEmployee(employee),
          err => this.errorMessage = err
      );
    }
  }

  displayEmployee(employee: Employee): void {
    this.departments = ['Information Technology', 
    'Artificial Intellegence', 
    'Sales', 
    'Marketing', 
    'Human Resource'
  ];
   if (this.employee.id === 0) {
      this.pageTitle = 'Add employee';
    } else {
      this.employee = employee;
      this.pageTitle = `Edit employee: ${this.employee.firstName}`;
    }
  }

  deleteEmployee(): void {
    if (this.employee.id != 0) {
      if (confirm(`Really delete the employee : ${this.employee.firstName}?`)) {
        this.service.deleteEmployee(this.employee.id)
          .subscribe(
            () => this.onSaveComplete('Employee Deleted successfully !'),
            err => this.errorMessage = err
          );
      }
    }
  }

  saveEmployee(): void {
    const emp = { ...this.employee };

    if (emp.id === 0) {
      this.service.createEmployee(emp)
        .subscribe(
          (savedEmp: Employee) => this.onSaveComplete('Employee saved successfully !'),
          err => this.errorMessage = err
        );
    } else {
      this.service.updateEmployee(emp)
        .subscribe(
          (savedEmp: Employee) => this.onSaveComplete("Employee updated successfully !"),
          err => this.errorMessage = err
        );
    }
  }

  onSaveComplete(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = null;
    this.router.navigate(['/employees']);
  }
}
