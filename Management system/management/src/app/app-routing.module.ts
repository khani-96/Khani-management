import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path:'login',component: LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'client',component:ClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
LoginComponent