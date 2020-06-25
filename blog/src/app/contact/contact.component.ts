import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  checkoutForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      FirstName: '',
      LastName: '',
      address: ''
    });
   }

  ngOnInit() {
  }
  onSubmit(customerData) {
    // Process checkout data here
    alert('We received your Data');
 
    // this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
