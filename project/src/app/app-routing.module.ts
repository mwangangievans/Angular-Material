import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridComponent } from './mat-grid/mat-grid.component';
import { MatListComponent } from './mat-list/mat-list.component';
import { SelectCompComponent } from './select-comp/select-comp.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'select',component:SelectCompComponent},
  {path:'mat-list',component:MatListComponent},
  {path:'mat-grid',component:MatGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
