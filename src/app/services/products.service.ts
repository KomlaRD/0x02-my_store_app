import { Injectable } from '@angular/core';
import { Products } from '../models/product';
import { product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  // Method to return products available in the json data
  getProducts(): Products[] {
    return product;
  }

 // Method to return a particular product based on id
  getProduct(id: number): Products {
    return product.filter((product) => {
      product.id === id;
    }) [0];

  }

  getSelectedProduct(): Products {
    return product.filter((product) => product.url)[0];
}
}
