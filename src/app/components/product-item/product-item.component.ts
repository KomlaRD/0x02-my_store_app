import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {

  product: Products[];

  selectedProduct: Products;

  // Number of products added to cart
  orderNumber: number;

  productDetails (product: Products) {
    this.router.navigate(['/products', product.id]);
    this.selectedProduct = product;
  }

  addToCart (id: number) {
    window.alert('Product has been added to cart');
    console.log(id);
    this.orderNumber = this.orderNumber;
  }
  
  constructor (private router: Router, private productService: ProductsService) {
    this.selectedProduct = new Products;
    this.product = [];
    this.orderNumber = 1;
  }
  ngOnInit(): void {
    this.product = this.productService.getProducts();
  }
}
