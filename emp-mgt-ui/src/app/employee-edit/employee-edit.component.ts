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
        .subscribe({
          next: (employee: Employee) => this.displayEmployee(employee),
          error: err => this.errorMessage = err
      });
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
    if (this.employee.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the employee : ${this.employee.firstName}?`)) {
        this.service.deleteEmployee(this.employee.id)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
      }
    }
  }

  saveEmployee(): void {
    const emp = { ...this.employee };

    if (emp.id === 0) {
      this.service.createEmployee(emp)
        .subscribe({
          next: () => this.onSaveComplete(),
          error: err => this.errorMessage = err
        });
    } else {
      this.service.updateEmployee(emp)
        .subscribe({
          next: () => this.onSaveComplete(),
          error: err => this.errorMessage = err
        });
    }
  }

  onSaveComplete(): void {
    this.router.navigate(['/employees']);
  }
}
