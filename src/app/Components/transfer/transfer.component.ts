import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Recipient } from '../recipients/Recipient.model';
import { Transfer } from './transfer.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transfer:Transfer= new Transfer;
  userId:string='';
  recipients:Recipient[]=[]

  constructor(private backendservice:BackendserviceService, private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {
    debugger
    this.dataservice.currentId.subscribe(val=>{
      this.userId=val;
     });

    this
     .backendservice
     .getrecipient(this.userId)
     .subscribe(recepiants => {
      this.recipients = recepiants as Recipient[]
     });
  }
  transfermoney(){
    this.transfer.transferFrom = this.userId
    this.backendservice.addtransfer(this.transfer, this.userId).subscribe(transfer => {
       debugger
       
      if(this.transfer==null ){
        this.router.navigate(['/errorpage']);
      }else{
        this.router.navigate(['/dashboard/'+this.userId]);
      }     },
      error => {
        console.log("Error is:", error);
      });
}
}
