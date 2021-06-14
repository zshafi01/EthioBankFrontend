import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Account } from '../account/Account.modle';
import { Withdrawl } from './withdrawl.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  userId:string='';
  withdrawl:Withdrawl = new Withdrawl;
  amount:string='0';
  accountnumber:string='';
  public description:string='';

  
  
  accountsList:Account[]=[];
    constructor(private backendservice:BackendserviceService, private router:Router, private dataservice:DataService) { }
  
    ngOnInit(): void {
  
      this.dataservice.currentId.subscribe(val=>{
        this.userId=val;
       })
      this.backendservice.loadAccounts(this.userId).subscribe(accounts=>{
        this.accountsList = accounts as Account[];
        console.log("Accounts lis it:", this.accountsList);
        
      })
  
    }
    subtractmoney(){
      this.backendservice.withdrawl(this.accountnumber,this.amount).subscribe(withdrawl=>{
        
        console.log("saved withdrawl is:",JSON.stringify(withdrawl));
        // this.router.navigate(['/withdraw']);
        this.router.navigate(['/dashboard/'+ this.userId]);

      },
      error=>{
        this.router.navigate(['/errorpage',{'error':'not able to withdraw may be inseficient fund'}]);
    
        console.log("Error is:",error);
        })
    }
  
    }
  
  
