import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [AdminDashboardComponent, ViewAccountsComponent, ViewUsersComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
