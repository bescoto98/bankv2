import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminAccountsComponent } from './admin-accounts/admin-accounts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

const adminRoutes: Routes = [
  {
    path: 'a', component: AdminRootComponent,
    children:
    [
      { path: '', component: AdminDashComponent },
      { path: 'user', component: AdminUsersComponent },
          // children: [ path: ':id', component]},
      { path: 'account', component: AdminAccountsComponent },
      { path: ':id', component: AdminInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
