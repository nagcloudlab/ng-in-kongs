import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  firstName: string = '';
  lastName: string = '';

  loadCustomer() {
    this.firstName = 'John';
    this.lastName = 'Doe';
  }

}
