import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Transaction } from './Transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input("userIDValue") 
  userIDValue:string='';
transactions:Transaction[] = [];
  constructor(private backendservice:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
    this.backendservice.listoftransaction(this.userIDValue).subscribe(
      transaction=>{
        this.transactions=transaction as Transaction[]
      },
      (error)=>{
          console.log(error);
          
        }
    )
   
    }

}
