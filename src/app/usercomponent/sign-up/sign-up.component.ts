import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validator, Validators, FormControl } from '@angular/forms';
import {GetService} from '../../services/data/get.service'
import { AuthService } from '../../services/Authentication/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
  // email:string;
  value
  constructor(
    private formBuilder: FormBuilder, 
    public authService : AuthService,
    private data:GetService
    ) {
      this.userForm = this.formBuilder.group({
        first_name: ['', [
          Validators.required, 
          Validators.maxLength(50)
        ]],
        last_name: ['', [
          Validators.required,
          Validators.maxLength(50)
          ]],
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),]],
        phone: ['', [
          Validators.required,
           Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')
          ]],
        subscribe : ['' ,
         Validators.required
        ],
        password: ['', [
          Validators.required,
           Validators.minLength(5),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
          ]],
      });
      
  }

  async ngOnInit() {
    let email =this.userForm.get('email').value;
    this.data.currentMessage.subscribe(message =>email = message)
    this.value = email;
  }

 
}
