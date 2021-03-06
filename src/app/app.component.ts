import { Component } from '@angular/core';
import {AuthService} from './services/Authentication/auth.service';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // fader,
    slider,
    // transformer,
    // stepper
  ]
})
export class AppComponent {
  title = 'Final';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
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
