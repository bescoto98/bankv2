import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingRootComponent } from './landing-root/landing-root.component';

const landingRoutes: Routes = [
  {
    path: '', component: LandingRootComponent,
    children:
    [
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(landingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }
