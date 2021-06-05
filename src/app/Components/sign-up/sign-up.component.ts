import { Component, OnInit } from '@angular/core';
import { User } from '../login/user.model';
import { BackendserviceService } from 'src/app/Services/backendservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User= new User;
  constructor(private backendService:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  signupuser(){
    // this.user.role="user"
  this.backendService.newuser(this.user).subscribe(user=>{
    console.log("saved user is:",JSON.stringify(user));
    this.router.navigate(['/login']);
    
  },
  error=>{
    this.router.navigate(['/errorpage']);

    console.log("Error is:",error);
  })
}
}