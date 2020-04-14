import { Component, OnInit, Input } from '@angular/core';
import { GetService } from '../../services/data/get.service';
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { quiz } from '../../model/quiz'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router' 
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  quiz :quiz[];
  config;
  public id;
  constructor(private get: GetService, private route: ActivatedRoute, private title : Title, private router : Router) {
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: Number
    }

    this.title.setTitle('Test')
  }
  listChoose = [];
  changed(choose, index) {  
    this.listChoose[index] = choose
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.id = params.get('id');
      this.get.getquiz(this.id).pipe(
        map(quiz => this.quiz = quiz)
      ).subscribe(quiz => {
        this.config.totalItems = quiz.length
      })
    })
    
    
  }
  
  onFinished(event) {
    if(event.action == "done") {   
    let mark =0;
    for(var i = 0; i < this.listChoose.length; i++) {
      if(this.quiz[i].Answers[this.listChoose[i] -1].Id === this.quiz[i].AnswerId) {
        mark++;
      }
    }
    localStorage.setItem('mark' , mark.toString())
    this.router.navigate([ `/exam/${this.id}/result` ])
    }
  }

  onSubmit() {
    let mark =0;
    for(var i = 0; i < this.listChoose.length; i++) {
      if(this.quiz[i].Answers[this.listChoose[i] -1].Id === this.quiz[i].AnswerId) {
        mark++;
      }
    }
    localStorage.setItem('mark' , mark.toString())
    this.router.navigate([ `/exam/${this.id}/result` ])
  }

  up() {
    this.config.currentPage++;
  }
  down() {
    this.config.currentPage--;
  }
  firstpage() {
    this.config.currentPage = 1
  }
  lastpage() {
    this.config.currentPage = this.config.totalItems;
  }



}
