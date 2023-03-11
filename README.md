# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Components

- CartComponent: responsible for displaying products added to cart as well as template driven form to submit an order.
- ConfirmationComponent: displays a success message when an order is placed.
- ProductItemComponent: displays available products inside ProductListComponent.
- ProductListComponent: displays products from ProductItemComponent.
- ProductItemDetailComponent: displays the details of a selected product.
- HeaderComponent: displays the navigation bar.

## Models

- Items: class for cart items.
- Product: class for products.
- User: class for user/client making an order.
= Products: example data of products in the store.

## Routes

- /home routes to ProductListComponent which is the home page.
- /cart routes to CartComponent.
- /products/:id routes to ProductsItemDetailComponent.
- /" " routes to home page.
- /** routes to home page.

## Services
- There are two services in the application namely ProductService and CartService.
- The ProductService is responsible for fetching products and updating the ProductListComponent.
-  CartService is responsible for data shared between ProductListComponent, ProductItemDetailComponent and CartComponent.
