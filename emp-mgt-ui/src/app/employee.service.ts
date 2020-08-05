import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  serviceUrl:string = 'http://localhost:8080/emp-mgt/employees';

  constructor(private http: HttpClient) {

  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.serviceUrl}`);
  }

  public createEmployee(employee: Employee): Observable<string> {
    return this.http.post<string>(this.serviceUrl, employee, httpOptions);
  }
}
