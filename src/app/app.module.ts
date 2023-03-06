import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { HeaderComponent } from './layout/header/header.component';

// Services
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';

// Form modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

// Angular materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Http modules
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
