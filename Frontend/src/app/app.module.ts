import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeesProgressComponent } from './employees-progress/employees-progress.component';
import { EmployeeProgressComponent } from './employee-progress/employee-progress.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmployeeComponent } from './employee/employee.component';
import { PasswordPipe } from './pipes/password.pipe';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [

    // components
    AppComponent,
    EmployeesProgressComponent,
    EmployeeProgressComponent,
    HomepageComponent,
    EmployeeComponent,

    // pipes
    PasswordPipe,
      NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
