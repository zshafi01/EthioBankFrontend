import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { Customer } from '../profile/Customer.model';

@Component({
  selector: 'app-updatecustomerforadmin',
  templateUrl: './updatecustomerforadmin.component.html',
  styleUrls: ['./updatecustomerforadmin.component.css']
})
export class UpdatecustomerforadminComponent implements OnInit {
  idtoupdate:Number=-1;
  customer: Customer = new Customer;
  constructor(private backendservice:BackendserviceService,  private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idtoupdate = Number(params.get('id'));
 
    });
    this.backendservice
    .getcustomerbyid(this.idtoupdate)
    .subscribe((customertoupdate)=>{
     this.customer=customertoupdate as Customer
     debugger
     this.customer.email=customertoupdate.user.email
    });
    
  }

  updatecustomer(){
    debugger
    this.backendservice.updatecustomers(this.customer,this.idtoupdate).subscribe(customer=>{
      console.log("saved customer is:",JSON.stringify(customer));
      // this.router.navigate(['/listofcustomers']);
      this.router.navigate(['/admindashboard']);

    },
    error=>{
      console.log("Error is:",error);
    })
  }

}



