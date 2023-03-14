import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  @Input("value") cart: Array<any> = []

  constructor() {
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
  }

  ngOnDestroy() {
    console.log("CartViewComponent::ngOnDestroy");
    // todo any side-effect when component is destroyed
  }

}
