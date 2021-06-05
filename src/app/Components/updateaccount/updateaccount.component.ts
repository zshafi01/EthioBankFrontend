import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Account } from '../account/Account.modle';
import { Customer } from '../profile/Customer.model';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent implements OnInit {
  account: Account = new Account;
  customer:Customer=new Customer;
  userId:string='';

  constructor(private backendservice: BackendserviceService, private route: ActivatedRoute, private router:Router, private dataservice:DataService) { }
  idtoupdate:Number=-1;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idtoupdate = Number(params.get('id'));
 
    });
    this.backendservice
    .getaccountbyid(this.idtoupdate)
    .subscribe((accounttoupdate)=>{
     this.account=accounttoupdate as Account
    });
    
  }

  updateaccount(){
    this.backendservice.updateaccount(this.account).subscribe(account=>{
      console.log("saved account is:",JSON.stringify(account));
      this.router.navigate(['/listofaccounts']);
      
    },
    error=>{
      console.log("Error is:",error);
    })
  }

}

