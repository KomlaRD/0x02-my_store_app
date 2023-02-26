import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  product: Products;
  quantity: number = 0;

  constructor(private productService: ProductsService, private location: Location, private route: ActivatedRoute, private cart: CartService) {
    this.product = new Products();
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
  }

  addToCart(id: number) {
    this.cart.addToCart(this.product, this.quantity)
    this.quantity = 1;
    window.alert("Your product has been added to cart");
  }

  // Button method to go back to homepage
  goBack() {
    this.location.back();
  }
}
