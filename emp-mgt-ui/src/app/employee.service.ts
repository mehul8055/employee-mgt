import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employees = [
    { 
      id:1, 
      firstName:'First Name 1', 
      middleName: 'Middle Name 1', 
      lastName: 'Last Name 1', 
      salary: 100000, 
      address: '1/B, Society1, Near Road 1, Area 1, City 1, State 1, PIN. 123456', 
      mobile: 1234567890, email:'firstname1@email.com', 
      gender:'Male', 
      department: 'Sales',
      profile: 'This is Employee 1 Profile,\n second line of this Profile. '
    },
    { 
      id:2, 
      firstName:'First Name 2', 
      middleName: 'Middle Name 2', 
      lastName: 'Last Name 2', 
      salary: 200000, 
      address: '2/B, Society2, Near Road 2, Area 2, City 2, State 2, PIN. 223456', 
      mobile: 2234567890, email:'firstname2@email.com', 
      gender:'Male', 
      department: 'Sales',
      profile: 'This is Employee 2 Profile,\n second line of this Profile. '
    },
    { 
      id:3, 
      firstName:'First Name 3', 
      middleName: 'Middle Name 3', 
      lastName: 'Last Name 3', 
      salary: 300000, 
      address: '3/B, Society3, Near Road 3, Area 3, City 3, State 3, PIN. 323456', 
      mobile: 3234567890, email:'firstname3@email.com', 
      gender:'Male', 
      department: 'Sales',
      profile: 'This is Employee 3 Profile,\n second line of this Profile. '
    }
  ]
  constructor() { }

  public getEmployees(): Array<Employee> {
    return this.employees;
  }

  public createEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}
