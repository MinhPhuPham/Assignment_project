import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../services/auth.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private title: Title) {
  this.title.setTitle('User');
  }

  ngOnInit() {
  }

}
