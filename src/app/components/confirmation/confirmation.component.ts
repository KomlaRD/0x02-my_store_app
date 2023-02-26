import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  user: User;

  backToProduct() {
    this.router.navigate(["/"]);
  }

  constructor(private router: Router) {
    this.user = new User();
  };
}
