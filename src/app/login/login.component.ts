import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  title=' Login Form';

  submit() {
    console.log('login form Data', this.loginForm.value);
    this.router.navigate(['/questionlist']);
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    })
    }
}
