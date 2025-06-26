import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumindoApiService {
  private baseUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.baseUrl}/`);
  }
  getProductById(id: number = Math.floor(Math.random() * 1000)) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}

