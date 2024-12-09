import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getuser(logindata: any) {
    return this.http.post('http://mhecomerce1993-001-site1.ptempurl.com/api/auth', logindata)
  }
}
