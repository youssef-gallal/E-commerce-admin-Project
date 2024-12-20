import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
    const savedUserType = localStorage.getItem('usertype');
    this.userType = new BehaviorSubject(savedUserType ? JSON.parse(savedUserType) : null);
  }

  userType = new BehaviorSubject(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  loadingOn() {
    this.loadingSubject.next(true);

  }

  loadingOff() {
    this.loadingSubject.next(false);
  }

  setUserType(userType: any) {
    this.userType.next(userType);
    localStorage.setItem('usertype', JSON.stringify(userType));
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getuser(logindata: any) {
    return this.http.post('http://116.202.13.245:2030/api/auth', logindata)
  }

}
