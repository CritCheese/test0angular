import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
// import { Test01Component } from './test01/test01.component';
import { AdminDashboardComponent } from './member/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './member/user/user-dashboard/user-dashboard.component';
import { ProductsComponent } from 'src/app/products/products.component';



const routes: Routes = [
  { path: '', redirectTo: 'login1', pathMatch: 'full' },
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard]},
  { path: 'login0', component: AdminLoginComponent },
  { path: 'login1', component: UserLoginComponent },
  { path: 'product/:id', component: ProductsComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
