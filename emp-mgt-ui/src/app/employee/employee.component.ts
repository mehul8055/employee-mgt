import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Output() notifySeeDetails: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(): string{
    return "assets/images/"+this.employee.gender+".png";
  }

  onSeeDetails(){
    this.notifySeeDetails.emit(this.employee);
  }

}
