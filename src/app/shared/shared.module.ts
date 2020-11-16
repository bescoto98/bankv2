import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountViewComponent } from './account-view/account-view.component';
import { InfoViewComponent } from './info-view/info-view.component';



@NgModule({
  declarations: [AccountViewComponent, InfoViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AccountViewComponent, InfoViewComponent
  ]
})
export class SharedModule { }
