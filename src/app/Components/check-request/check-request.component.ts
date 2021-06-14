import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { User } from '../login/user.model';
import { ChequeBookReq } from './ChequeBookReq.model';

@Component({
  selector: 'app-check-request',
  templateUrl: './check-request.component.html',
  styleUrls: ['./check-request.component.css']
})
export class CheckRequestComponent implements OnInit {
  user:User=new User;
  userId:string='';
chequeBookReq:ChequeBookReq= new ChequeBookReq;
  constructor(private backendservice:BackendserviceService, private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  request(){
    this.backendservice.addcheckreq(this.chequeBookReq).subscribe(chequeBookReq=>{
      console.log("saved admin is:",JSON.stringify(chequeBookReq));
      this.router.navigate(['/dashboard/'+ this.userId]);
    },
    error=>{
      this.router.navigate(['/errorpage']);
      console.log("Error is:",error);
      })
  }
  }

