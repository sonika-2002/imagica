import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
studentForm: FormGroup = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required])
  })
  
  formValue: any;
  onSubmit(){
    debugger
     this.formValue = this.studentForm.value
     alert("Logout Done");
     this.onreset()

  }

  onreset(){
    this.studentForm=new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required])
  })
  }
}
