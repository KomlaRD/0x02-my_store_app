import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // User object for two way data binding
  user = {
    fullName: " ",
    address: " ",
    creditCard: null
  }

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
