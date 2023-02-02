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

  productDetails (product: Products) {
    this.router.navigate(['/products', product.id]);
    this.selectedProduct = product;
  }

  addToCart () {
    window.alert('Product has been added to cart');
  }
  
  constructor (private router: Router, private productService: ProductsService) {
    this.selectedProduct = new Products;
    this.product = [];
  }
  ngOnInit(): void {
    this.product = this.productService.getProducts();
  }
}
