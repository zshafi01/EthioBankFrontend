import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Components/login/user.model';
import { Customer } from '../Components/profile/User.model';
import { ChequeBookReq } from '../Components/check-request/ChequeBookReq.model';
import { Account } from '../Components/account/Account.modle';
import { Deposit } from '../Components/deposit/Deposit.model';
import { Transfer } from '../Components/transfer/transfer.model';
import { Recipient } from '../Components/recipients/Recipient.model';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  constructor(private http:HttpClient) { }
login(user:User):Observable<any>{
        return this.http.post("http://localhost:8081/login", user)
      }
newuser(user:User):Observable<any>{
            return this.http.post("http://localhost:8081/adduser",user)
      }
      
saveCustomer(customer:Customer,userId:string):Observable<any>{
    
        return this.http.post("http://localhost:8081/addcustomer/"+userId,customer)
 }
createAccount(account:Account,userId:string):Observable<any>{
    return this.http.post("http://localhost:8081/addaccount/" +userId,account)
}
addcheckreq(chequeBookReq:ChequeBookReq):Observable<any>{
  return this.http.post("http://localhost:8081/addcheckreq", chequeBookReq)
}
deposit(deposit:Deposit):Observable<any>{
  return this.http.post("http://localhost:8081/deposit", deposit)
}
addtransfer(transfer:Transfer, userId:string):Observable<any>{
  return this.http.post("http://localhost:8081/addtransfer" +userId, transfer)
}
addrecipient(recipient:Recipient):Observable<any>{
  return this.http.post("http://localhost:8081/addrecipients", recipient)

}
}