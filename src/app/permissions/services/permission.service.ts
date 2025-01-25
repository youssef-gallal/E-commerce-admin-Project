import { Injectable } from '@angular/core';
import { environment } from '../../../env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }
  getTag(param?: any) {
    return this.http.get(`${environment.baseUrl}/Role/GetAllPermissions?${param ? `Keyword=${param}` : ''}`)
  }
}
