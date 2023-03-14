import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT-v1';
  cart: Array<any> = [];
  addToCart(item: any) {
    this.cart.push(item);
  }
}
