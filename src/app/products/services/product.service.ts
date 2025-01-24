import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // addCategory(data: any) {
  //   return this.http.post(`${environment.baseUrl}/products`, data)
  // }
  getAllProducts() {
    return this.http.get(`${environment.baseUrl}/Product/GetAll`)
  }

  addProduct(data:any){
    return this.http.post(`${environment.baseUrl}/Product/Create`,data)

  }
  getSingleProduct(id:any){
    return this.http.get(`${environment.baseUrl}/Product/Get?Id=${id}`)
  }
}
