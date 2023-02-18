import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  user = new User();

  confirmationPage() {
    window.alert("Product order has been received");
    this.router.navigate(["confirmation"]);
  }

  constructor (private router: Router) {

  }

  onSubmit() {
    window.alert("Product order has been received");
    console.log("Product order has been submitted from: ", this.user);
    this.router.navigate(["confirmation"]);
  }

  }
