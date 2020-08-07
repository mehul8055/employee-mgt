import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTilesComponent } from './employee-list/employee-tiles.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees-tiles', component: EmployeeTilesComponent },
  { path: 'employees/:id/edit', component: EmployeeEditComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
