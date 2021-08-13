import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AdminDashboardComponent } from './member/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './member/user/user-dashboard/user-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { EditUserComponent } from './member/admin/admin-dashboard/edit-user/edit-user.component';
import { EditProductComponent } from './member/user/user-dashboard/edit-product/edit-product.component';
import { AddProductComponent } from './member/user/user-dashboard/add-product/add-product.component';
import { ProductChartComponent } from './products/product-chart/product-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    LoginFormComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProductsComponent,
    EditUserComponent,
    EditProductComponent,
    AddProductComponent,
    ProductChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
