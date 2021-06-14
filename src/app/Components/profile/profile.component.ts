import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { User } from '../login/user.model';
import { Customer } from './Customer.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
newcustomer: Customer = new Customer;
user:User=new User;
userId:string='';
// ssnPattern = "^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$";
// ssn = new FormControl();
constructor(private backendService:BackendserviceService, private router:Router, private dataService:DataService) { }
  ngOnInit(): void {
  }
  registor(){
   this.dataService.currentId.subscribe(val=>{
    this.userId=val;
   })
    this.backendService.saveCustomer(this.newcustomer,this.userId)
    .subscribe(customer=>{
       console.log("saved customer is:",JSON.stringify(customer));
      if(customer==null ){
        this.router.navigate(['/errorpage']);
      }else{
        this.router.navigate(['/dashboard/'+this.userId]);
      } 
    },
    error=>{
      this.router.navigate(['/errorpage']);

      console.log("Error is:",error);
    })
  }

}
