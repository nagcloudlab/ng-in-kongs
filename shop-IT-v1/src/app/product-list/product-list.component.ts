import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 100,
      description: 'Laptop description',
      isAvailable: true,
      imgPath: "assets/Laptop.png"
    },
    {
      id: 2,
      name: 'Mobile',
      price: 100,
      description: 'Mobile description',
      isAvailable: true,
      imgPath: "assets/Mobile.png"
    }
  ]

  @Output() buy = new EventEmitter<any>()

  handleBuy(product: any) {
    this.buy.emit(product)
  }



}
