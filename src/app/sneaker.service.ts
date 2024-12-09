import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SneakerService {
  private apiUrl = 'http://localhost:3000/api/sneakers'; // URL do backend

  constructor(private http: HttpClient) {}

  getSneakers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}