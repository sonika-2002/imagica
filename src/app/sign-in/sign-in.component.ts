import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signObj: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    contact: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    pincode: new FormControl("", [Validators.required]),
    gender: new FormControl(""),
  })

  formValue: any;
  onSubmit(){
    debugger;
    this.formValue = this.signObj.value;
    debugger;
    alert('Form submitted successfully')
  }
}
