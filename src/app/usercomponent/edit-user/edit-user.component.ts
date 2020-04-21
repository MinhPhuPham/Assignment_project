import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/Authentication/auth.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(public authService : AuthService,private location:Location, private title : Title) { this.title.setTitle('Edit')}

  ngOnInit() {
  }
  Back(){
this.location.back()
  }

}
