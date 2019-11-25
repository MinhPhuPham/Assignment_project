import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {QuizService} from '../../services/quiz.service'
import { Title } from '@angular/platform-browser'
import { quiz } from '../../models/quizs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router' 
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  
  config;
  id;
  constructor(private route: ActivatedRoute, private title : Title, private router : Router, private QuizSv : QuizService) {
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: Number
    }
    this.title.setTitle('Test')
   }
   quiz :quiz[];
   listChoose = [];
   changed(choose, index) {
     this.listChoose[index] = choose
    
 
   }
   ngOnInit() {
     this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
       this.QuizSv.getquiz(this.id).pipe(
         map(quiz => this.quiz = quiz)
       ).subscribe(quiz => {
         this.config.totalItems = quiz.length
       })
       console.log(quiz);
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
