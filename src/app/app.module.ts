import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular/main';

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
import { MenuComponentCodule } from './menus/menus.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainHeader,
    AppHomePage,
    AppLoginPage,
    AppRegisterPage,
    AppAboutPage,
    MenuComponentCodule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
  ],
  providers: [AppComponent, AuthGuard, UserAuth, UserAuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
