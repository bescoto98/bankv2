import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeRootComponent } from './employee-root/employee-root.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeAccountsComponent } from './employee-accounts/employee-accounts.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeePendingComponent } from './employee-pending/employee-pending.component';

const employeeRoutes: Routes = [
  {
    path: 'e', component: EmployeeRootComponent,
    children:
    [
      { path: '', component: EmployeeDashComponent },
      { path: 'accounts', component: EmployeeAccountsComponent },
      { path: 'info', component: EmployeeInfoComponent },
      { path: 'pending', component: EmployeePendingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
