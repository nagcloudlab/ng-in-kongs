import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmEmailValidator } from './custom-validators';

@Component({
  selector: 'app-reactive-customer-form',
  templateUrl: './reactive-customer-form.component.html',
  styleUrls: ['./reactive-customer-form.component.css']
})
export class ReactiveCustomerFormComponent {

  customerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['Nag', [Validators.required, Validators.minLength(3)]],
      lastName: ['Nag', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['who1@mail.com', [Validators.required, Validators.email]],
        cemail: ['who1@mail.com', [Validators.required, Validators.email]],
      }, { validators: confirmEmailValidator }),
      mobile: [''],
      noti: ['email']
    })
  }

  handleNotiChange(noti: string) {
    const mobile = this.customerForm.get('mobile');
    if (noti === "text") {
      mobile?.setValidators([Validators.required, Validators.pattern(/\d{10}/)])
    } else {
      mobile?.clearValidators()
    }
    mobile?.updateValueAndValidity()
  }

  handleForm(event: any) {
    console.log(this.customerForm.value);
  }

  loadCustomer() {
    let cutomerData = {
      firstName: "John",
    }
    // this.customerForm.setValue(cutomerData);
    this.customerForm.patchValue(cutomerData);
  }

}
