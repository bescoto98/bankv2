import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { EmployeeRootComponent } from './employee-root/employee-root.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeAccountsComponent } from './employee-accounts/employee-accounts.component';
import { EmployeeUsersComponent } from './employee-users/employee-users.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';


@NgModule({
  declarations: [EmployeeNavComponent, EmployeeRootComponent, EmployeeDashComponent, EmployeeAccountsComponent, EmployeeUsersComponent, EmployeeInfoComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
