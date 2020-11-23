import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminAccountsComponent } from './admin-accounts/admin-accounts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminUserSearchComponent } from './admin-user-search/admin-user-search.component';
import { AdminPendingComponent } from './admin-pending/admin-pending.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AdminRootComponent, AdminAccountsComponent, AdminUsersComponent, AdminInfoComponent, AdminDashComponent, AdminNavComponent, AdminUserSearchComponent, AdminPendingComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
