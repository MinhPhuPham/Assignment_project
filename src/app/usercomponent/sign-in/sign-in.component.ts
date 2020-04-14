import { Component, OnInit } from '@angular/core';

import { NgForm, FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms'
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/Authentication/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userform: FormGroup
  items: Observable<any[]>;
  constructor(
    private formbuilder: FormBuilder,
    private title: Title,
    public authService: AuthService,
    db :AngularFirestore
  ) {
    this.items = db.collection('items').valueChanges();
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
