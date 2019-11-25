import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validator, Validators, FormControl } from '@angular/forms';
import{AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder, 
    public authService : AuthService
    ) {
   
  }


  ngOnInit() {
    this.userForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      subscribe : ['' , Validators.required],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    });
  }


}
