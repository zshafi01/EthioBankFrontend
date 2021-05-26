import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentId.subscribe(val=>{
      console.log("id is:"+val);
    })
    
  }

}
