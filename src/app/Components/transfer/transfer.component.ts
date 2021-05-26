import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { Transfer } from './transfer.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transfer:Transfer= new Transfer;
  constructor(private backendservice:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  transfermoney(){
    this.backendservice.addtransfer(this.transfer).subscribe(transfer=>{
      console.log("saved user is:",JSON.stringify(transfer));
      this.router.navigate(['/transfer']);
      
    },
    error=>{
      this.router.navigate(['/errorpage']);
  
      console.log("Error is:",error);
    })
  }
}
