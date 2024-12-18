import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http: HttpClient) { }
  addCategory(form: any) {
    return this.http.post(`${environment.baseUrl}/productCategories`, form)
  }
  getCategory() {
    return this.http.get(`${environment.baseUrl}/productCategories`)
  }

}
