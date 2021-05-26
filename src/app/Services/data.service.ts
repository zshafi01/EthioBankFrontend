import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  private userIdSource = new BehaviorSubject('');
  currentId = this.userIdSource.asObservable();


  putUserID(id: string) {
    this.userIdSource.next(id)
  }
}
