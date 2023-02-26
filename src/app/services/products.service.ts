import { Injectable } from '@angular/core';
import { Products } from '../models/product';
import { product } from '../models/products';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  user: User;

  constructor() {
    this.user = new User();
   }

  // Method to return products available in the json data
  getProducts(): Products[] {
    return product;
  }

 // Method to return a particular product based on id
  getProduct(id: number): Products {
    return product.filter(product => product.id === product.id)[id-1];
    }

  // Return products added to cart
  addToCart(id: number): Products[] {
    return product;
  }
}

