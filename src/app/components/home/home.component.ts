import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { list } from '../../model/list';
import { Title } from '@angular/platform-browser'

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [...list]
  Register: FormGroup;
  constructor(private title : Title, private fb: FormBuilder) {this.title.setTitle('Home') }

  ngOnInit() {
    this.Register = this.fb.group({

      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
        Validators.email
      ])
    });
    let email = this.Register.get('email');
    console.log(email);
    
  }
  Sendmail(){
    let email = this.Register.get('email');
  }
 

}
