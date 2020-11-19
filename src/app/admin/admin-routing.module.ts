import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminAccountsComponent } from './admin-accounts/admin-accounts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminUserSearchComponent } from './admin-user-search/admin-user-search.component';
import { AdminPendingComponent } from './admin-pending/admin-pending.component';

const adminRoutes: Routes = [
  {
    path: 'a', component: AdminRootComponent,
    children:
    [
      { path: '', component: AdminDashComponent },
      { path: 'user/:utype', component: AdminUsersComponent },
      { path: 'accounts', component: AdminAccountsComponent },
      { path: 'search', component: AdminUserSearchComponent },
      { path: 'info', component: AdminInfoComponent },
      { path: 'pending', component: AdminPendingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
