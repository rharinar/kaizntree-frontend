import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://18.118.147.123:8000/users/login/';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
