import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppHomePage } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { AppMainHeader } from '../app/mainheader/mainheader.component';
import { AppLoginPage } from './login/login.component';
import { AppRegisterPage } from './register/register.component';
import { AppAboutPage } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppMainHeader,
    AppHomePage,
    AppLoginPage,
    AppRegisterPage,
    AppAboutPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
