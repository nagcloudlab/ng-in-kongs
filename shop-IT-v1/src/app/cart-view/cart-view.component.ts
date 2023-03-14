import { Component, Input, SimpleChange } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cart: Array<any> = []

  constructor(private cartService: CartService) {
    console.log("CartViewComponent::constructor");
    // todo any ont-time intialization
  }

  ngOnChanges(change: SimpleChange) {
    console.log("CartViewComponent::ngOnChanges");
    console.log(change);
    // todo any side-effect when component receives new inputs i.e chages
  }

  ngOnInit() {
    console.log("CartViewComponent::ngOnInit");
    // todo any side-effect when component is initialized
    this.cartService.cartStream
      .subscribe({
        next: cart => {
          this.cart = cart;
        }
      })
  }

  ngAfterContentInit() {
    console.log("CartViewComponent::ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log("CartViewComponent::ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log("CartViewComponent::ngOnDestroy");
    // todo any side-effect when component is destroyed
  }

}
