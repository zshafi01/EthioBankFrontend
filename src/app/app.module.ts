import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AccountComponent } from './Components/account/account.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DepositComponent } from './Components/deposit/deposit.component';
import { WithdrawComponent } from './Components/withdraw/withdraw.component';
import { TransferComponent } from './Components/transfer/transfer.component';
import { CheckRequestComponent } from './Components/check-request/check-request.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { RecipientsComponent } from './Components/recipients/recipients.component';
import { NavComponent } from './Components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    DashboardComponent,
    AccountComponent,
    ProfileComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    CheckRequestComponent,
    ErrorpageComponent,
    RecipientsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
