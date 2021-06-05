import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { Recipient } from './Recipient.model';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {
  @Input("userIDValue") 
  userIDValue:string='';
  
  message:string=''
recipient:Recipient= new Recipient;
constructor(private backendService:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  newrecipient(){
    this.backendService.addrecipient(this.recipient,this.userIDValue).subscribe(recipient=>{
      console.log("saved recipient is:",JSON.stringify(recipient));
      // this.router.navigate(['/transfer']);
      this.message="success";
      
    },
    error=>{
      this.router.navigate(['/errorpage']);

      console.log("Error is:",error);
      this.message="Error"
    })
  }

  }

