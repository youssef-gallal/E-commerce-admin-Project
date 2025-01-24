import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class VariantService {
  constructor(private http: HttpClient) { }

  addVariant(data: any) {
    return this.http.post(`${environment.baseUrl}/Variant/Create`, data)
  }
  getVariant(param?: any) {
    return this.http.get(`${environment.baseUrl}/Variant/GetAll?${param ? `Keyword=${param}` : ''}`)
  }

  deleteVariant(id: any) {
    return this.http.delete(`${environment.baseUrl}/variant/Delete?Id=${id}`)
  }

  editVariant(data: any) {
    return this.http.put(`${environment.baseUrl}/Variant/Update`, data)
  }

}
