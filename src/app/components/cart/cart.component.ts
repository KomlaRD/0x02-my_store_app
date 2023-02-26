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

  cartProduct: Items[];
  items: Items[];
  user = new User();
  @Input() quantity: number = 0;

  constructor (private router: Router, private productsService: ProductsService, private cartService: CartService) {
         this.cartProduct = this.cartService.items;
         this.items = [];
  }

  removeFromCart(products: Products): void {
    this.cartService.removeFromCart(products);
    this.cartProduct = this.cartService.items;
  }

  onSubmit() {
    window.alert("Product order has been received");
    console.log("Product order has been submitted from: ", this.user);
    this.router.navigate(["confirmation"]);
  }

  ngOnInit(): void {
     this.cartProduct = this.cartService.items;
  }
  }