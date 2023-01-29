import { Component } from '@angular/core';
import { Products } from 'src/app/models/product';
import { product } from 'src/app/models/products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {

  product: Products[] = product;

  productDetails () {
    window.alert('Product Details loading');
  }

  addToCart () {
    window.alert('Product has been added to cart');
  }
}
