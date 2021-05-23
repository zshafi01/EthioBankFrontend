import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/Services/backendservice.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User= new User;
  constructor(private backendservice:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }
   signin(){
     this.backendservice.login(this.user).subscribe(user=>{
    console.log("saved admin is:",JSON.stringify(user));
    this.router.navigate(['dashboard']);
  },
  error=>{
    console.log("Error is:",error);
    })
}
}
