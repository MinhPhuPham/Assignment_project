import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {
  alert() {
    window.alert('Your messenger has been sent')
  }
  constructor(private title : Title) {this.title.setTitle('Ask') }

  ngOnInit() {
  }

}
