import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
import { VisaComponent } from './visa/visa.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { UniversityComponent } from './university/university.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-a/component-b/component-b.component';
import { ComponentCComponent } from './component-a/component-c/component-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    EmployeeComponent,
    CompanyComponent,
    VisaComponent,
    SideNavigationComponent,
    UniversityComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
