import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdershippingService {


  constructor(private http: HttpClient) { }

  getOrdershipping(param?: any) {
    return this.http.get(`${environment.baseUrl}/OrderShipping/GetAll?${param ? `Keyword=${param}` : ''}`)
  }
}
