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
    });
    
  }

  updatecustomer(){
    this.backendservice.updatecustomers(this.customer).subscribe(customer=>{
      console.log("saved customer is:",JSON.stringify(customer));
      this.router.navigate(['/listofcustomers']);
      
    },
    error=>{
      console.log("Error is:",error);
    })
  }

}



