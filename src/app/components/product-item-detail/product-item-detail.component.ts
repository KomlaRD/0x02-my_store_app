import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/product';
import { product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  product: Products;
  @Input() selectedProduct: Products;

  constructor(private productService: ProductsService, private location: Location, private route: ActivatedRoute) {
    this.product = new Products();
    this.selectedProduct = new Products();
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
    //this.selectedProduct = this.productService.getSelectedProduct();;
  }

  addToCart() {}

  // Button method to go back to homepage
  goBack() {
    this.location.back();
  }
}
