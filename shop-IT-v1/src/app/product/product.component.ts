import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input("value") product: any
  @Output() buy = new EventEmitter<any>()

  currentTab: number = 1

  reviews: Array<any> = [
    { stars: 5, body: 'sample-review-1', author: "who1" },
    { stars: 3, body: 'sample-review-2', author: "who" }
  ]

  handleTabChange(event: any, tabIndex: number) {
    console.log(event);
    this.currentTab = tabIndex
  }
  isTabSelected(index: number) {
    return this.currentTab === index
  }

  handleBuy(event: any) {
    this.buy.emit(this.product)
  }

}
