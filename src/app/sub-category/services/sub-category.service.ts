import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http: HttpClient) { }
  
  addSupCategory(form: any) {
    return this.http.post(`${environment.baseUrl}/productCategories`, form)
  }
  getSupCategory() {
    return this.http.get(`${environment.baseUrl}/productCategories`)
  }

  editSupCategory(id:any,data:any){
    return this.http.put(`${environment.baseUrl}/productCategories/${id}`,data)
  }

  deleteSupCategory(id:any){
    return this.http.delete(`${environment.baseUrl}/productCategories/${id}`)
  }

}
