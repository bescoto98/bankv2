import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDashComponent } from './customer-dash/customer-dash.component';
import { CustomerRootComponent } from './customer-root/customer-root.component';
import { CustomerNavComponent } from './customer-nav/customer-nav.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerTransactionComponent } from './customer-transaction/customer-transaction.component';

const customerRoutes: Routes = [
  {
    path: 'c', component: CustomerRootComponent,
    children:
    [
      { path: '', component: CustomerDashComponent },
      { path: 'info', component: CustomerInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
