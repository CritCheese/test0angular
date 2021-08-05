import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Test01Component } from './test01/test01.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AdminDashboardComponent } from './member/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './member/user/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    Test01Component,
    UserLoginComponent,
    AdminLoginComponent,
    LoginFormComponent,
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
