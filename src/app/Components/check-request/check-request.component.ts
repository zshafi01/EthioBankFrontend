import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { ChequeBookReq } from './ChequeBookReq.model';

@Component({
  selector: 'app-check-request',
  templateUrl: './check-request.component.html',
  styleUrls: ['./check-request.component.css']
})
export class CheckRequestComponent implements OnInit {
chequeBookReq:ChequeBookReq= new ChequeBookReq;
  constructor(private backendservice:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  request(){
    this.backendservice.addcheckreq(this.chequeBookReq).subscribe(chequeBookReq=>{
      console.log("saved admin is:",JSON.stringify(chequeBookReq));
      this.router.navigate(['/chequeBookReq']);
    },
    error=>{
      console.log("Error is:",error);
      })
  }
  }

