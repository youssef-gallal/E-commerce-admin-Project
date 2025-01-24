import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class MaincategoryService {

  constructor(private http: HttpClient) { }

  addCategory(data: any) {
    return this.http.post(`${environment.baseUrl}/Category/Create`, data)
  }
  getCategory(param?:any) {
    return this.http.get(`${environment.baseUrl}/Category/GetAll?${param ? `Keyword=${param}`:''}`)
  }

  deleteCategory(id: any) {
    return this.http.delete(`${environment.baseUrl}/Category/Delete?Id=${id}`)
  }

  editCategory(data: any) {
    return this.http.put(`${environment.baseUrl}/Category/Update`, data)
  }
}
