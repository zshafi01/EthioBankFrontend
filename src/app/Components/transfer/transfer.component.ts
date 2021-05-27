import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Transfer } from './transfer.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transfer:Transfer= new Transfer;
  userId:string='';
  constructor(private backendservice:BackendserviceService, private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {
  }
  transfermoney(){
    this.dataservice.currentId.subscribe(val=>{
      this.userId=val;
     })
    this.backendservice.addtransfer(this.transfer, this.userId).subscribe(transfer => {
       console.log("saved account is:", JSON.stringify(transfer));
      if(this.transfer==null ){
        this.router.navigate(['/errorpage']);
      }else{
        this.router.navigate(['/dashboard/'+this.userId]);
      }     },
      error => {
        console.log("Error is:", error);
      })
}
}
