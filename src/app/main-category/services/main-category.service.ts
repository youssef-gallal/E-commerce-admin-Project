import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class MaincategoryService {

  constructor(private http: HttpClient) { }

  addCategory(data: any) {
    return this.http.post(`${environment.baseUrl}/MainCategories`, data)
  }
  getCategory() {
    return this.http.get(`${environment.baseUrl}/MainCategories`)
  }
}
