import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Components/login/user.model';
import { Customer } from '../Components/profile/Customer.model';
import { ChequeBookReq } from '../Components/check-request/ChequeBookReq.model';
import { Account } from '../Components/account/Account.modle';
import { Deposit } from '../Components/deposit/Deposit.model';
import { Transfer } from '../Components/transfer/transfer.model';
import { Recipient } from '../Components/recipients/Recipient.model';
import { Transaction } from '../Components/transaction/Transaction.model';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
  host="http://34.227.116.117:8081";
  // host="http://localhost:8081";
  delete(id: Number):Observable<any>{
    return this.http.delete(this.host+'/customer/'+id);
  }
  deleteAccount(id: Number):Observable<any>{
    return this.http.delete(this.host+'/account/'+id);
  }
  listoftransaction(userId:string):Observable<any>{
    return this.http.get(this.host+"/listoftransaction/"+userId);
  }
  
  loadAccounts(userId:string):Observable<any> {
    return this.http.get(this.host+"/accountsByUserId/"+userId);
  }

  constructor(private http:HttpClient) { }
login(user:User):Observable<any>{
        return this.http.post(this.host+"/login", user)
      }
newuser(user:User):Observable<any>{
            return this.http.post(this.host+"/adduser",user)
      }
      
saveCustomer(customer:Customer,userId:string):Observable<any>{
    
        return this.http.post(this.host+"/addcustomer/"+userId,customer)
 }
createAccount(account:Account,userId:string):Observable<any>{
    return this.http.post(this.host+"/addaccount/" +userId,account)
}
addcheckreq(chequeBookReq:ChequeBookReq):Observable<any>{
  return this.http.post(this.host+"/addcheckreq", chequeBookReq)
}
deposit(accountNumber:string,amount:string):Observable<any>{
  const url=this.host+"/deposit/"+accountNumber+"/"+amount
  return this.http.get(url)
}
withdrawl(accountNumber:string,amount:string):Observable<any>{
  const url=this.host+"/withdrawl/"+accountNumber+"/"+amount
  return this.http.get(url)
}
addtransfer(transfer:Transfer, userId:string):Observable<any>{
  return this.http.post(this.host+"/addtransfer/" +userId, transfer)
}
addrecipient(recipient:Recipient,userId:string):Observable<any>{
  return this.http.post(this.host+"/addrecipients/"+userId, recipient,{responseType: 'text'})
}

getrecipient(userId:string):Observable<any>{
  return this.http.get(this.host+"/recipentsByUserId/"+userId);
}

listofAccountByUserId(userId:string):Observable<any>{
  return this.http.get(this.host+'/accountsByUserId/'+userId)
}

customerByUserId(userId:string):Observable<any>{
  return this.http.get(this.host+'/customerUserId/'+userId)
}


listofcustomers():Observable<any>{
  return this.http.get(this.host+"/listofcustomers")
}
listofaccounts():Observable<any>{
  return this.http.get(this.host+"/listofaccounts")
}
updatecustomers(customer:Customer, id:Number):Observable<any>{
  return this.http.put(this.host+"/updatecustomers/"+id, customer)
}
updateaccount(account:Account):Observable<any>{
  return this.http.put(this.host+"/updateaccount", account)
}
getcustomerbyid (id:Number):Observable<any>{
  return this.http.get(this.host+"/customer/" +id)
}
getaccountbyid(id:Number):Observable<any>{
  return this.http.get(this.host+"/account/" +id)
}
}