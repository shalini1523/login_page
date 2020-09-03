import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(public router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  title='Form';

  submit() {
    console.log('register form Data', this.registerForm.value);
   this.router.navigate(['/login']);
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: 0
    })
  }
}
