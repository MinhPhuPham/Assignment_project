import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Authentication/auth.service';
import * as $ from 'jquery';
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
    $(document).ready(function() {

      // onclick close navbar
      $(".navbar-nav li a:not(.dropdown-toggle)").on('click', function() {
          $(".navbar-collapse").removeClass("show");
          $(".animated-icon1").removeClass("open");
      });
  });

  $(document).ready(function() {

      $('.first-button').on('click', function() {

          $('.animated-icon1').toggleClass('open');
      });
  });
  }


}
