import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Components/login/user.model';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  constructor(private http:HttpClient) { }
  login(user:User):Observable<any>{
        return this.http.post("http://localhost:8081/login", user,{responseType: 'text'})
      }
  newuser(user:User):Observable<any>{
            return this.http.post("http://localhost:8081/adduser",user)
      }
}
