import { NgModule } from '@angular/core';
import { matSnackBarAnimations } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatAutocompleteComponent } from './mat-autocomplete/mat-autocomplete.component';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatDatepickerComponent } from './mat-datepicker/mat-datepicker.component';
import { MatExpansionComponent } from './mat-expansion/mat-expansion.component';
import { MatGridComponent } from './mat-grid/mat-grid.component';
import { MatListComponent } from './mat-list/mat-list.component';
import { MatSnackbarComponent } from './mat-snackbar/mat-snackbar.component';
import { MatTooltipComponent } from './mat-tooltip/mat-tooltip.component';
import { SelectCompComponent } from './select-comp/select-comp.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'select',component:SelectCompComponent},
  {path:'mat-list',component:MatListComponent},
  {path:'mat-grid',component:MatGridComponent},
  {path:'mat-expansion',component:MatExpansionComponent},
  {path:'mat-autocomplete',component:MatAutocompleteComponent},
  {path:'mat-checkbox',component:MatCheckboxComponent},
  {path:'myDatePicker',component:MatDatepickerComponent},
  {path:'tooltip',component:MatTooltipComponent},
  {path:'snackbar',component:MatSnackbarComponent},
  {path:'tables',component:TablesComponent},

  





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
