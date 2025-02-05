import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http: HttpClient) { }

  getOrderList(param?: any) {
    return this.http.get(`${environment.baseUrl}/Order/GetAll?${param ? `Keyword=${param}` : ''}`)
  }
}
