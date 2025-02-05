import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {


  constructor(private http: HttpClient) { }

  addTag(data: any) {
    return this.http.post(`${environment.baseUrl}/Tag/Create`, data)
  }
  getTag(param?: any) {
    return this.http.get(`${environment.baseUrl}/Tag/GetAll?${param ? `Keyword=${param}` : ''}`)
  }

  deleteTag(id: any) {
    return this.http.delete(`${environment.baseUrl}/Tag/Delete?Id=${id}`)
  }

  editTag(data: any) {
    return this.http.put(`${environment.baseUrl}/Tag/Update`, data)
  }

  // products tags

  addProductTag(data:any){
    return this.http.post(`${environment.baseUrl}/ProductTag/CreateProductTags`, data)
  }
  getProductTag(id:any){
    return this.http.get(`${environment.baseUrl}/ProductTag/GetAll?ProductId=${id}`)
  }

}
