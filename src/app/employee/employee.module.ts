import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { EmployeeRootComponent } from './employee-root/employee-root.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeAccountsComponent } from './employee-accounts/employee-accounts.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeePendingComponent } from './employee-pending/employee-pending.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [EmployeeNavComponent, EmployeeRootComponent, EmployeeDashComponent, EmployeeAccountsComponent, EmployeeInfoComponent, EmployeePendingComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
