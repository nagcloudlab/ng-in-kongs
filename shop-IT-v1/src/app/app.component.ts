import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT-v1';
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
  currentTab: number = 1

  handleTabChange(event: any, tabIndex: number) {
    console.log(event);
    this.currentTab = tabIndex
  }
  isTabSelected(index: number) {
    return this.currentTab === index
  }

}
