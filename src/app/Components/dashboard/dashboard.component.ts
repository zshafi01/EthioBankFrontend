import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Customer } from 'src/app/Components/profile/Customer.model';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  customer:Customer[]=[];

  userId:string=''

  constructor(private route: ActivatedRoute, private dataService: DataService,private backendService:BackendserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.userId =params["userId"]
      this.dataService.putUserID(this.userId);
      console.log(params)
      //customer
        this.backendService.customerByUserId(this.userId)
        .subscribe(customer=>{
          console.log("Customer is:",customer);
        })
      //accoutn

      this.backendService.listofAccountByUserId(this.userId)
        .subscribe(accounts=>{
          console.log("accounts is:",accounts);
        })
    });
    
  
 
  }

}