import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeesProgressComponent } from './employees-progress/employees-progress.component';
import { EmployeeProgressComponent } from './employee-progress/employee-progress.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesProgressComponent,
    EmployeeProgressComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
