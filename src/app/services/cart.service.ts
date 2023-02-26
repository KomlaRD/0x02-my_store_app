import { Injectable, Input } from '@angular/core';
import { Items } from '../models/items';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Items[] = [];
  @Input() quantity: number = 1;

  constructor() { }

  addToCart(product: Products, quantity: number): void {
    const checkItemInCart = this.items.findIndex(item => item.id === product.id);
    if (checkItemInCart > -1) {
      this.items[checkItemInCart].quantity += quantity;
      return;
}
this.items.push();
  }

  removeFromCart(product: Products): void {
    //this.items.splice(this.items.indexOf(), this.items.length - 1);
}
}
