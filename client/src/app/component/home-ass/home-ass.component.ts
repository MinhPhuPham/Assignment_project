import { Component, OnInit } from '@angular/core';
import { subjects } from '../subjects';
@Component({
  selector: 'app-home-ass',
  templateUrl: './home-ass.component.html',
  styleUrls: ['./home-ass.component.scss']
})
export class HomeAssComponent implements OnInit {

  constructor() { }
  listSubjects=[]
  ngOnInit() {
  }

}
