import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
    const savedUserType = localStorage.getItem('usertype');
    this.usertype = new BehaviorSubject(savedUserType ? JSON.parse(savedUserType) : null);
  }

  usertype = new BehaviorSubject(null);

  setUserType(usertype: any) {
    this.usertype.next(usertype);
    localStorage.setItem('usertype', JSON.stringify(usertype));
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getuser(logindata: any) {
    return this.http.post('http://116.202.13.245:2030/api/auth', logindata)
  }

}
