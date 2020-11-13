import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashComponent } from './customer-dash/customer-dash.component';
import { CustomerRootComponent } from './customer-root/customer-root.component';
import { CustomerNavComponent } from './customer-nav/customer-nav.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerTransactionComponent } from './customer-transaction/customer-transaction.component';


@NgModule({
  declarations: [CustomerDashComponent, CustomerRootComponent, CustomerNavComponent, CustomerInfoComponent, CustomerTransactionComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
