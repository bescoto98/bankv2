import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@landing/home/home.component';
import { RegisterComponent } from '@landing/register/register.component';
import { LoginComponent } from '@landing/login/login.component';

const routes: Routes = [

  { path: '',
    component:HomeComponent },

  { path: 'register',
    component:RegisterComponent },

  { path: 'login',
    component:LoginComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
