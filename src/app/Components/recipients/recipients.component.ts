import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Recipient } from './Recipient.model';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {
  
  userIDValue:string='';
  
  message:string=''
recipient:Recipient= new Recipient;
constructor(private backendService:BackendserviceService, private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {
  }
  newrecipient(){
    this.dataservice.currentId.subscribe(val=>{
      this.userIDValue=val;
     })

    this.backendService.addrecipient(this.recipient,this.userIDValue).subscribe(recipient=>{
      console.log("saved recipient is:",JSON.stringify(recipient));
      // this.router.navigate(['/transfer']);
      this.message="success";
      this.router.navigate(['/dashboard/'+this.userIDValue]);
      
    },
    error=>{
      this.router.navigate(['/errorpage']);

      console.log("Error is:",error);
      this.message="Error"
    })
  }

  }

