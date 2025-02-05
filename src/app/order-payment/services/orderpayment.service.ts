import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderpaymentService {

  constructor(private http: HttpClient) { }

  getOrderpayment(param?: any) {
    return this.http.get(`${environment.baseUrl}/OrderItem/GetAll?${param ? `Keyword=${param}` : ''}`)
  }
}

