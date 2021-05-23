import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from  './Components/sign-up/sign-up.component'
import { LoginComponent } from './Components/login/login.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
