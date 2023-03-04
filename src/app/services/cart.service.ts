import { Injectable, Input } from '@angular/core';
import { Items } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Items[] = [];

  constructor() {
  
   }

  addToCart(product: any, quantity: number): void {
    const checkItemInCart = this.items.findIndex(item => item.id === product.id);
    if (checkItemInCart > -1) {
      this.items[checkItemInCart].quantity += quantity;
      return;
}
  product.quantity = quantity;
  this.items.push(product);
  }

  removeFromCart(product: any): void {
    this.items.splice(this.items.indexOf(product), this.items.length - 1);
}
}
