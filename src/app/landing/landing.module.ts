import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { LandingRoutingModule } from './landing-routing.module';



@NgModule({
  declarations: [HomeComponent, RegisterComponent, LoginComponent, HomeNavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
