import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { Deposit } from './Deposit.model';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
deposit:Deposit = new Deposit;
  constructor(private backendservice:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  addmoney(){
    this.backendservice.deposit(this.deposit).subscribe(deposit=>{
      console.log("saved deposit is:",JSON.stringify(deposit));
      this.router.navigate(['/deposit']);
    },
    error=>{
      this.router.navigate(['/errorpage']);
  
      console.log("Error is:",error);
      })
  }

  }

