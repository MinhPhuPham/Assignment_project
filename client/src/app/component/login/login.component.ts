import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { NgForm, FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userform: FormGroup
  constructor(
    private formbuilder: FormBuilder,
    private title: Title,
    public authService: AuthService
  ) {
    this.title.setTitle('Login')
  } // end of constructor

  users;
  submit: boolean = false;
  userlength;



  ngOnInit() {
    this.userform = this.formbuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }
 

}
