import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/product';
import { Items } from 'src/app/models/items';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Items[];
  user = new User();

  constructor (private router: Router, private productsService: ProductsService, private cartService: CartService) {
         this.items = this.cartService.items;
  }

  removeFromCart(products: Products): void {
    this.cartService.removeFromCart(products);
    this.items = this.cartService.items;
  }

  onSubmit() {
    window.alert("Product order has been received");
    console.log("Product order has been submitted from: ", this.user);
    this.router.navigate(["confirmation"]);
  }

  ngOnInit(): void {

  }
  }