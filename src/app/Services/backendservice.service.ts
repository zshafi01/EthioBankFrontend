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
  delete(id: Number):Observable<any>{
    return this.http.delete('http://localhost:8081/customer/'+id);
  }
  deleteAccount(id: Number):Observable<any>{
    return this.http.delete('http://localhost:8081/account/'+id);
  }
  listoftransaction(userId:string):Observable<any>{
    return this.http.get("http://localhost:8081/listoftransaction/"+userId);
  }
  
  loadAccounts(userId:string):Observable<any> {
    return this.http.get("http://localhost:8081/accountsByUserId/"+userId);
  }

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
deposit(accountNumber:string,amount:string):Observable<any>{
  const url="http://localhost:8081/deposit/"+accountNumber+"/"+amount
  return this.http.get(url)
}
withdrawl(accountNumber:string,amount:string):Observable<any>{
  const url="http://localhost:8081/withdrawl/"+accountNumber+"/"+amount
  return this.http.get(url)
}
addtransfer(transfer:Transfer, userId:string):Observable<any>{
  return this.http.post("http://localhost:8081/addtransfer" +userId, transfer)
}
addrecipient(recipient:Recipient,userId:string):Observable<any>{
  return this.http.post("http://localhost:8081/addrecipients/"+userId, recipient)

}

listofAccountByUserId(userId:string):Observable<any>{
  return this.http.get('http://localhost:8081/accountsByUserId/'+userId)
}

customerByUserId(userId:string):Observable<any>{
  return this.http.get('http://localhost:8081/customerUserId/'+userId)
}


listofcustomers():Observable<any>{
  return this.http.get("http://localhost:8081/listofcustomers")
}
listofaccounts():Observable<any>{
  return this.http.get("http://localhost:8081/listofaccounts")
}
updatecustomers(customer:Customer):Observable<any>{
  return this.http.put("http://localhost:8081/updatecustomers", customer)
}
updateaccount(account:Account):Observable<any>{
  return this.http.put("http://localhost:8081/updateaccount", account)
}
getcustomerbyid (id:Number):Observable<any>{
  return this.http.get("http://localhost:8081/customer/" +id)
}
getaccountbyid(id:Number):Observable<any>{
  return this.http.get("http://localhost:8081/account/" +id)
}
}