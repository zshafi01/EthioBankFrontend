import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Customer } from '../profile/Customer.model';
import { CustomerInfo } from '../profileofdashboard/CustomerInfo.model';

@Component({
  selector: 'app-listofcustomers',
  templateUrl: './listofcustomers.component.html',
  styleUrls: ['./listofcustomers.component.css']
})
export class ListofcustomersComponent implements OnInit {
  isDeleted = true;
  customers: Customer[] = [];

  // customerInfo:CustomerInfo=new CustomerInfo;
  //  customerInfo:CustomerInfo[]=[];

  constructor(private backendservice: BackendserviceService, private router: Router, private dataservice: DataService) { }

  ngOnInit(): void {
    debugger
    this.backendservice
      .listofcustomers()
      .subscribe(
        (customer) => {
          this.customers = customer as Customer[]

        },
        (error) => {
          this.router.navigate(['/errorpage']);
          console.log("Error is:", error);
        })

        //listofaccount
  }




  deleteCustomer(id: Number) {
    console.log(id, "to be deleted");

    this.backendservice.delete(id).subscribe(() => {
      console.log("successfuly deleted");
      this.isDeleted = true;
      this.backendservice.listofcustomers()
        .subscribe(
          (customer) => {
            this.customers = customer as Customer[]
          },


          (error) => {
            this.router.navigate(['/errorpage']);

            console.log("Error is:", error);
          },
          () => {
            console.log('finished');
          }
        )
    },
      (error) => {
        console.log("Error happende");

      })


  }
}
