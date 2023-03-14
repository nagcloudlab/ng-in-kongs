import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Array<any> = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .then((products: any) => this.products = products);
  }

}