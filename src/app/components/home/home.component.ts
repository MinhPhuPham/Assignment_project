import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { list } from '../../model/list';
import { Title } from '@angular/platform-browser';
import {GetService} from '../../services/data/get.service'

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [...list]
  Register: FormGroup;
  message:string;
  constructor(private title : Title, private fb: FormBuilder, private data:GetService,public router: Router) {this.title.setTitle('Home') }

  ngOnInit() {
    this.Register = this.fb.group({

      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
        Validators.email
      ])
    });
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  async Sendmail(){
    let email = this.Register.get('email');
    await this.data.changeMessage(email.value);
    this.router.navigate(['register']);
  }
 

}
