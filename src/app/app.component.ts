import { Component } from '@angular/core';
import {AuthService} from './services/Authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Final';
  
  constructor(public authService: AuthService) {}
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }

setGeoLocation(position: any) {
  this.authService.setLocation(
    position["coords"].latitude,
    position["coords"].longitude
  );
}
}
