import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  alert() {
    window.alert('Your messenger has been sent')
  }
  constructor(private title : Title) {this.title.setTitle('Feedback') }

  ngOnInit() {
  }

}
