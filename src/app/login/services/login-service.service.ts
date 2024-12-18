import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    getToken() {
        return localStorage.getItem('token')
    }

    getuser(logindata: any) {
        return this.http.post('http://116.202.13.245:2030/api/auth', logindata)
    }


}