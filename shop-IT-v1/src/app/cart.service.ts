import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Array<any> = [];
  cartStream = new BehaviorSubject(this.cart)

  addToCart(item: any) {
    this.cart = this.cart.concat(item);
    this.cartStream.next(this.cart);
  }

}
