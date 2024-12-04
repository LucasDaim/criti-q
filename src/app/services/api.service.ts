import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'https://api.x.com/2/users/:id/tweets'; // Substitua pela URL da API

  constructor(private http: HttpClient) {}
 
  // Exemplo de requisição GET
  get(endpoint: string, params?: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, { params });
  }

  // Exemplo de requisição POST
  post(endpoint: string, data: any, options?: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, options);
  }

  // Exemplo de requisição PUT
  put(endpoint: string, data: any, options?: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, options);
  }

  // Exemplo de requisição DELETE
  delete(endpoint: string, options?: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}`, options);
  }private authToken = '';

  setToken(token: string) {
    this.authToken = token;
  }
  
  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
  }
}
