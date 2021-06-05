import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Customer } from '../profile/Customer.model';
import { Account } from './Account.modle';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account: Account = new Account;
  customer:Customer=new Customer;
  userId:string='';
  constructor(private backendservice: BackendserviceService, private router: Router, private dataservice:DataService) { }
  ngOnInit(): void {
  }
  addaccount() {
    this.dataservice.currentId.subscribe(val=>{
      this.userId=val;
     })
    this.backendservice.createAccount(this.account,this.userId).subscribe(account => {
       console.log("saved account is:", JSON.stringify(account));
      if(this.account==null ){
        this.router.navigate(['/errorpage']);
      }else{
        this.router.navigate(['/dashboard/'+this.userId]);
      }     },
      error => {
        console.log("Error is:", error);
      })
  }
}

