import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  errorMessage: String;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: EmployeeService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getEmployee(id);
    }
  }

  getEmployee(id: number): void {
    this.service.getEmployee(id).subscribe({
      next: employee => this.employee = employee,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/employees']);
  }

}
