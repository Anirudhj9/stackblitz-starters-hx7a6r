import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppHomePage } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { AppMainHeader } from '../app/mainheader/mainheader.component';
import { AppLoginPage } from './login/login.component';
import { AppRegisterPage } from './register/register.component';
import { AppAboutPage } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { UserAuth } from './services/userAuth.service';
import { UserAuthenticationService } from './services/userAuthentication.service';
import { AuthGuard } from './services/Auth-Gaurd.service';
import { MenuComponentModule } from './menus/menus.component';
import { AppFooterModule } from './footer/footer.component';
import { OMMEmployee } from './OMM/employee/employee.component';
import { EmployeePageServices } from './services/EmployeePage.service';

@NgModule({
  declarations: [
    AppComponent,
    AppMainHeader,
    AppHomePage,
    AppLoginPage,
    AppRegisterPage,
    AppAboutPage,
    MenuComponentModule,
    AppFooterModule,
    OMMEmployee,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [
    AppComponent,
    AuthGuard,
    UserAuth,
    UserAuthenticationService,
    EmployeePageServices,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
