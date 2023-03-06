import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {

  product: Products[];
  selectedProduct: Products;

  // Number of products added to cart
  quantity: number;

  productDetails (product: Products) {
    this.router.navigate(['/products', product.id]);
    this.selectedProduct = product;
  }

  addToCart () {
    this.cart.addToCart(this.selectedProduct, this.quantity);
    this.quantity = 1;
    window.alert('Your product has been added to cart');
  }
  
  constructor (private router: Router, private productService: ProductsService, private cart: CartService) {
    this.selectedProduct = new Products;
    this.product = [];
    this.quantity = 1;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.product = res
    })
  }
}
