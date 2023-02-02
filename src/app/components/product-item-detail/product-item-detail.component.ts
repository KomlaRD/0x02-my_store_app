import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/product';
import { product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  @Input() product: Products;
  @Input() selectedProduct: Products;

  constructor(private productService: ProductsService) {
    this.product = new Products();
    this.selectedProduct = new Products();
  }

  ngOnInit() {
    this.selectedProduct = this.productService.getSelectedProduct();;
  }

  addToCart() {}
}
