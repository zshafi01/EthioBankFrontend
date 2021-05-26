import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { Recipient } from './Recipient.model';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {
recipient:Recipient= new Recipient;
constructor(private backendService:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  newrecipient(){
    this.backendService.addrecipient(this.recipient).subscribe(recipient=>{
      console.log("saved recipient is:",JSON.stringify(recipient));
      this.router.navigate(['/transfer']);
      
    },
    error=>{
      this.router.navigate(['/errorpage']);

      console.log("Error is:",error);
    })
  }

  }

