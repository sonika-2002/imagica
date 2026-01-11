import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-order.component.html',
  styleUrl: './book-order.component.css'
})
export class BookOrderComponent {
  bookingObj: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    contact: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    foodName: new FormControl("", [Validators.required])
  })

  formValue: any;
  onSubmit(){
    debugger;
    this.formValue = this.bookingObj.value
    alert('Congratulations your Ordered successfully')
    this.onReset()
  }

  onReset(){
    this.bookingObj = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    contact: new FormControl(""),
    address: new FormControl(""),
    foodName: new FormControl("")
  })
  }
}
