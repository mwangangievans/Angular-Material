import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { SelectCompComponent } from './select-comp/select-comp.component';
import { MatListModule} from '@angular/material/list';
import { MatListComponent } from './mat-list/mat-list.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGridComponent } from './mat-grid/mat-grid.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatExpansionComponent } from './mat-expansion/mat-expansion.component';
import { MatAutocompleteComponent } from './mat-autocomplete/mat-autocomplete.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerComponent } from './mat-datepicker/mat-datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipComponent } from './mat-tooltip/mat-tooltip.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSnackbarComponent } from './mat-snackbar/mat-snackbar.component';
import { TablesComponent } from './tables/tables.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormsComponent } from './mat-forms/mat-forms.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    SelectCompComponent,
    MatListComponent,
    MatGridComponent,
    MatExpansionComponent,
    MatAutocompleteComponent,
    MatCheckboxComponent,
    MatDatepickerComponent,
    MatTooltipComponent,
    MatSnackbarComponent,
    TablesComponent,
    MatFormsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
