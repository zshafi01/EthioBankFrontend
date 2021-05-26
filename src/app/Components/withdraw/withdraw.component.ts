import { Component, OnInit } from '@angular/core';
import { Account } from '../account/Account.modle';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  account:Account = new Account();

  constructor() { }

  ngOnInit(): void {
  }

}
