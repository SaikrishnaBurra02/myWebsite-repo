import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { VisaComponent } from './visa/visa.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'visa', component: VisaComponent},
  {path: 'side-about', component: EmployeeComponent},
  {path: 'side-service', component: CompanyComponent},
  {path: 'side-clients', component: VisaComponent},
  {path:'side-clients',component: CompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
