import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@landing/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}
  // { path: '**', component:HomeComponent }
  // { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
