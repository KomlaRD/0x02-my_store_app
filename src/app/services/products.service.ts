import { Injectable } from '@angular/core';
import { Products } from '../models/product';
import { product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Products[] {
    return product;
  }
}
