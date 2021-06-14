import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  errormessage:string='';
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.errormessage=this.activatedRoute.snapshot?.params['error']
  }

}
