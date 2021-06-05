import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { Customer } from '../profile/Customer.model';
import { CustomerInfo } from './CustomerInfo.model';

@Component({
  selector: 'app-profileofdashboard',
  templateUrl: './profileofdashboard.component.html',
  styleUrls: ['./profileofdashboard.component.css']
})
export class ProfileofdashboardComponent implements OnInit {
  @Input("userIDValue") 
  userIDValue:string='';
  // customer:Customer = new Customer;
  customerInfo:CustomerInfo=new CustomerInfo;

  constructor(private backendservice:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
    this.backendservice.customerByUserId(this.userIDValue).subscribe(
      customer=>{
        debugger
        this.customerInfo=customer as CustomerInfo
      },
      (error)=>{
          console.log(error);
          
        }
    )
   
    }

    
  }


