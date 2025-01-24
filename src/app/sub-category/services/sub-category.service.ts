import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http: HttpClient) { }
  
  addSupCategory(form: any) {
    return this.http.post(`${environment.baseUrl}/SubCategory/Create`, form)
  }
  getSupCategory() {
    return this.http.get(`${environment.baseUrl}/SubCategory/GetAll`)
  }

  editSupCategory(data:any){
    return this.http.put(`${environment.baseUrl}/SubCategory/Update`,data)
  }

  deleteSupCategory(id:any){
    return this.http.delete(`${environment.baseUrl}/SubCategory/Delete?Id=${id}`)
  }

}
