import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from  './Components/sign-up/sign-up.component'
import { LoginComponent } from './Components/login/login.component'
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AccountComponent } from './Components/account/account.component';
import { CheckRequestComponent } from './Components/check-request/check-request.component';
import { TransferComponent } from './Components/transfer/transfer.component';
import { RecipientsComponent } from './Components/recipients/recipients.component';
import { NavComponent } from './Components/nav/nav.component';
import { DepositComponent } from './Components/deposit/deposit.component';
import { WithdrawComponent } from './Components/withdraw/withdraw.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:SignUpComponent},
  { path: 'dashboard/:userId', component:DashboardComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'account', component:AccountComponent},
  { path: 'chequeBookReq', component:CheckRequestComponent},
  { path: 'transfer', component:TransferComponent},
  { path: 'recipients', component:RecipientsComponent},
  {path: 'nav', component:NavComponent},
  {path: 'deposit', component:DepositComponent},
  {path: 'withdraw', component:WithdrawComponent},

  { path: 'errorpage', component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
