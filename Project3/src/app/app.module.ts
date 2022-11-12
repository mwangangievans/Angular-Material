import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,  } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ShortenPipePipe } from './Pipes/shorten-pipe.pipe';
import { NgxChartsModule }from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    ShortenPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxChartsModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
