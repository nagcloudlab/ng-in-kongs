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
      currencyCode: 'INR',
      description: 'Laptop description',
      isAvailable: true,
      imgPath: "assets/Laptop.png",
      make: Date.now()
    },
    {
      id: 2,
      name: 'Mobile',
      price: 100,
      description: 'Mobile description',
      isAvailable: true,
      imgPath: "assets/Mobile.png",
      make: Date.now()
    }
  ]


}
