import { AppHomePage } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { AppLoginPage } from './login/login.component';
import { AppRegisterPage } from './register/register.component';
import { AppAboutPage } from './about/about.component';
import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/Auth-Gaurd.service';
import { OMMEmployee } from './OMM/employee/employee.component';

const routes: Routes = [
  { path: 'home', component: AppHomePage },
  { path: 'login', component: AppLoginPage },
  { path: 'register', component: AppRegisterPage },
  {
    path: 'about',
    component: AppAboutPage,
    children: [{ path: 'OMM/employee', component: OMMEmployee }],
  },
];
//canActivate: [AuthGuard],
export const routerProviders = [provideRouter(routes)];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
