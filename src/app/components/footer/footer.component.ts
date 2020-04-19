import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/Authentication/auth.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
