import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { TransactionComponent } from './Components/transaction/transaction.component';
import { ProfileofdashboardComponent } from './Components/profileofdashboard/profileofdashboard.component';
import { AdmindashboardComponent } from './Components/admindashboard/admindashboard.component';
import { ListofcustomersComponent } from './Components/listofcustomers/listofcustomers.component';
import { UpdatecustomerforadminComponent } from './Components/updatecustomerforadmin/updatecustomerforadmin.component';
import { TransferdisplayComponent } from './Components/transferdisplay/transferdisplay.component';
import { ListofaccountsComponent } from './Components/listofaccounts/listofaccounts.component';
import { UpdateaccountComponent } from './Components/updateaccount/updateaccount.component';
import { ListofchequbookrequestComponent } from './listofchequbookrequest/listofchequbookrequest.component';

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
    NavComponent,
    TransactionComponent,
    ProfileofdashboardComponent,
    AdmindashboardComponent,
    ListofcustomersComponent,
    UpdatecustomerforadminComponent,
    TransferdisplayComponent,
    ListofaccountsComponent,
    UpdateaccountComponent,
    ListofchequbookrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
