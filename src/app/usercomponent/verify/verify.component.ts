import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Authentication/auth.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private authService : AuthService, private title : Title) { this.title.setTitle('Verify') }

  ngOnInit() {
  }

}
