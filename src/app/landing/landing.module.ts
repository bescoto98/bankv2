import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HomeComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LandingModule { }
