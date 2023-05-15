import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EcontactComponent } from './econtact/econtact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/Guard/auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"econtact",component:EcontactComponent},
  {path:"user",component:UserComponent},
  
// {path:"crud",canActivate:[AuthGuard],loadChildren:()=>import('./crud/crud.module').then((m)=>m.CrudModule)},
 //{path:"dashboard",component:DashboardComponent},

  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
