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
  isGoOut = false;
  quiz: quiz[];
  config;
  public id;
  quiz2: any;
  constructor(private get: GetService, private route: ActivatedRoute, private title: Title, private router: Router) {
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: Number
    }

    this.title.setTitle('Test')
  }
  listChoose = [];
  changed(choose, index) {
    this.listChoose[index] = choose;
    this.quiz[index].Answered = true;
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.get.getquiz(this.id).pipe(
        map(quiz => this.quiz = quiz)

      ).subscribe(quiz => {
        this.config.totalItems = quiz.length;
      })
    })

  }
  onFinished(event) {

    if (event.action == "done") {
      let mark = 0;
      for (var i = 0; i < this.listChoose.length; i++) {
        if ((this.listChoose[i] > 0) && (this.quiz[i].Answers[this.listChoose[i] - 1].Id === this.quiz[i].AnswerId)) {
          mark++;
        }
      }
      this.isGoOut = true;
      localStorage.setItem('choosen', JSON.stringify(this.listChoose));
      localStorage.setItem('mark', mark.toString())
      this.router.navigate([`/exam/${this.id}/result`])
    }
  }
  check_question(number){
    let curren_ques = number.getAttribute('data_index');
    let index_choosen=Object.keys(this.listChoose);
    if(index_choosen.indexOf(curren_ques)==-1){
      return false
    }
    return true
  }
  check(){
    this.check_question;
  }
  redirect_number_question(number) {
    let curren_ques = number.getAttribute('data_index');
    this.config.currentPage = parseInt(curren_ques)+1;
  }

  isAnswered(quiz: quiz) {
    return this.quiz.find(x => x.Answered);
  }
  onSubmit() {
    this.isGoOut = true;
    let mark = 0;
    for (var i = 0; i < this.listChoose.length; i++) {
      if ((this.listChoose[i] > 0) && (this.quiz[i].Answers[this.listChoose[i] - 1].Id === this.quiz[i].AnswerId)) {
        mark++;
      }
    }
    localStorage.setItem('choosen', JSON.stringify(this.listChoose));
    localStorage.setItem('mark', mark.toString())
    this.router.navigate([`/exam/${this.id}/result`])
  }

  up() {
    this.config.currentPage++;
    this.check();
  }
  down() {
    this.config.currentPage--;
    this.check();
  }
  firstpage() {
    this.config.currentPage = 1;
    this.check();
  }
  lastpage() {
    this.config.currentPage = this.config.totalItems;
    this.check();
  }



}
