import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/product';
import { product } from 'src/app/models/products';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  @Input() product: Products;
  selectedProduct: Products;

  constructor() {
    this.product = new Products();
    this.selectedProduct = new Products;
  }

  addToCart() {}
}
