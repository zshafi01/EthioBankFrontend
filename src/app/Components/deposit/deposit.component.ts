import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { AccountComponent } from '../account/account.component';
import { Account } from '../account/Account.modle';
import { Deposit } from './Deposit.model';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
userId:string='';
deposit:Deposit = new Deposit;
amount:string='0';
accountnumber:string=''


accountsList:Account[]=[];
  constructor(private backendservice:BackendserviceService, private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {

    this.dataservice.currentId.subscribe(val=>{
      this.userId=val;
     })
    this.backendservice.loadAccounts(this.userId)
    .subscribe(accounts=>{
      this.accountsList = accounts as Account[];
      console.log("Accounts list it:", this.accountsList);
      
    })

  }
  
  addmoney(){
    debugger
    this.backendservice.deposit(this.accountnumber,this.amount).subscribe(deposit=>{
      console.log("saved deposit is:",JSON.stringify(deposit));
      // this.router.navigate(['/deposit']);
      this.router.navigate(['/dashboard/'+ this.userId]);

    },
    error=>{
      this.router.navigate(['/errorpage']);
  
      console.log("Error is:",error);
      })
  }

  }

