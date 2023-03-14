import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return Promise.resolve(
      [
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
    )
  }

}
