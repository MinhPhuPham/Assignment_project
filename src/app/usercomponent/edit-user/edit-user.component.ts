import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/Authentication/auth.service';
import { Location } from '@angular/common';
// import {User_Detail} from '../../services/Authentication/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
Userdata;
provider;
  User_Name
  providerData: any;
  constructor(public authService : AuthService,private location:Location, private title : Title) { this.title.setTitle('Edit')}

  ngOnInit() {
    this.Userdata= JSON.parse(localStorage.getItem('user'));
    console.log(this.Userdata);
    console.log(this.Userdata.displayName);
    
    this.provider=this.Userdata.providerData;
    this.providerData =this.provider[0];
    console.log(this.providerData.uid);
    this.User_Name=this.Userdata.displayName;
    
  }
  Back(){
this.location.back()
  }

}
