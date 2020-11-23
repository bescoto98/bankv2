import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountViewComponent } from './account-view/account-view.component';
import { InfoViewComponent } from './info-view/info-view.component';
import { PendingAccountViewComponent } from './pending-account-view/pending-account-view.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';



@NgModule({
  declarations: [AccountViewComponent, InfoViewComponent, PendingAccountViewComponent, FooterBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AccountViewComponent, InfoViewComponent, PendingAccountViewComponent, FooterBarComponent
  ]
})
export class SharedModule { }
