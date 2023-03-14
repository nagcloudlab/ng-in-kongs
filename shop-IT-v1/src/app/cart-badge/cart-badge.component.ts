import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent {

  value = 0

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartStream
      .subscribe((cart: any) => {
        this.value = cart.length;
      });
  }

}
