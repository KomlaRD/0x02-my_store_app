import { Injectable } from '@angular/core';
import { Products } from '../models/product';
import { product } from '../models/products';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User();
   }

  // Method to return products available in the json data
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>("http://localhost:4200/assets/data.json");
  }

 // Method to return a particular product based on id
  getProduct(id: number): Products {
    return product.filter(product => product.id === product.id)[id-1];
    }
}

