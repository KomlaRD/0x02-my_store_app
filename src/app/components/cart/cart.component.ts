import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProduct: Products[];
  user = new User();

  constructor (private router: Router, private productsService: ProductsService) {
         this.cartProduct = [];
  }

  onSubmit() {
    window.alert("Product order has been received");
    console.log("Product order has been submitted from: ", this.user);
    this.router.navigate(["confirmation"]);
  }

  ngOnInit(): void {
    this.cartProduct = this.productsService.getProducts();
  }
  }