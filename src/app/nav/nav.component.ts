import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Authentication/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    public authService : AuthService
  ) { }

  ngOnInit() {
  }


}
