import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { DataService } from 'src/app/Services/data.service';
import { Account } from 'src/app/Components/account/Account.modle'

@Component({
  selector: 'app-listofaccounts',
  templateUrl: './listofaccounts.component.html',
  styleUrls: ['./listofaccounts.component.css']
})
export class ListofaccountsComponent implements OnInit {
  isDeleted = true;
  accounts:Account[]=[];

  constructor(private backendservice: BackendserviceService, private router: Router, private dataservice: DataService) { }

  ngOnInit(): void {
    debugger
    this.backendservice
      .listofaccounts()
      .subscribe(
        (account) => {
          this.accounts = account as Account[]

        },
        (error) => {
          this.router.navigate(['/errorpage']);
          console.log("Error is:", error);
        })

  }




  deleteAccount(id: Number) {
    console.log(id, "to be deleted");

    this.backendservice.delete(id).subscribe(() => {
      console.log("successfuly deleted");
      this.isDeleted = true;
      this.backendservice.listofaccounts()
        .subscribe(
          (account) => {
            this.accounts = account as Account[]
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
