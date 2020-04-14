import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { list } from '../../model/list';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [...list]
  constructor(private title : Title) {this.title.setTitle('Home') }

  ngOnInit() {

   
  }
 

}
