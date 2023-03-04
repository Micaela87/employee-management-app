import { Routes } from "@angular/router";
import { EmployeeProgressComponent } from "./employee-progress/employee-progress.component";
import { EmployeesProgressComponent } from "./employees-progress/employees-progress.component";
import { HomepageComponent } from "./homepage/homepage.component";

export const routes: Routes = [
    { path: 'employee-progress', component: EmployeeProgressComponent },
    { path: 'employees-progress', component: EmployeesProgressComponent },
    { path: '', component: HomepageComponent }
];