import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminAccountsComponent } from './admin-accounts/admin-accounts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';


@NgModule({
  declarations: [AdminRootComponent, AdminAccountsComponent, AdminUsersComponent, AdminInfoComponent, AdminDashComponent, AdminNavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
