import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,  
    [RouterModule.forRoot(routes)],
  ]
})
export class AppRoutingModule { }
