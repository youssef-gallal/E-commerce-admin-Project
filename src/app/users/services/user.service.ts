import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  addusers(data: any) {
    return this.http.post(`${environment.baseUrl}/User/Create`, data)
  }
  getusers(param?: any) {
    return this.http.get(`${environment.baseUrl}/User/GetAll?${param ? `Keyword=${param}` : ''}`)
  }

  deleteusers(id: any) {
    return this.http.delete(`${environment.baseUrl}/User/Delete?Id=${id}`)
  }

  editusers(data: any) {
    return this.http.put(`${environment.baseUrl}/User/Update`, data)
  }


}
