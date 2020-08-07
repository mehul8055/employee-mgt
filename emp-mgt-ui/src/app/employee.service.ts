import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Employee } from './employee';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  serviceUrl: string = 'http://localhost:8080/emp-mgt/employees';

  constructor(private http: HttpClient) { }

  //Get All Employees
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.serviceUrl}`)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  //Get Employee By Id
  public getEmployee(id: number): Observable<Employee> {
    if (id === 0) {
      return of(new Employee());
    }
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        tap(data => console.log('getEmployee: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  //Create a new Employee
  public createEmployee(employee: Employee): Observable<string> {
    const url = `${this.serviceUrl}`;
    return this.http.post<string>(url, employee, httpOptions)
    .pipe(
      tap(data => console.log('createEmployee : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  //Delete Employee
  deleteEmployee(id: number): Observable<{}> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.delete<Employee>(url, httpOptions)
      .pipe(
        tap(data => console.log('deleteEmployee: ' + id)),
        catchError(this.handleError)
      );
  }

  //Update employee by Id
  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.serviceUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee, httpOptions)
      .pipe(
        tap(() => console.log('updateEmployee: ' + employee.id)),
        // Return the Employee on an update
        map(() => employee),
        catchError(this.handleError)
      );
  }

  private handleError(err): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
