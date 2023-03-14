import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT-v1';
  isCartOpen: boolean = false
  cart: Array<any> = [];
  addToCart(item: any) {
    this.cart = this.cart.concat(item);
  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
