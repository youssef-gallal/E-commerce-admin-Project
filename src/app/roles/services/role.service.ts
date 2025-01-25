import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  addRole(data: any) {
    return this.http.post(`${environment.baseUrl}/Role/Create`, data)
  }

  getRole(param?: any) {
    return this.http.get(`${environment.baseUrl}/Role/GetAll?${param ? `Keyword=${param}` : ''}`)
  }

  deleteRole(id: any) {
    return this.http.delete(`${environment.baseUrl}/Role/Delete?Id=${id}`)
  }

  editRole(data: any) {
    return this.http.put(`${environment.baseUrl}/Role/Update`, data)
  }



}
