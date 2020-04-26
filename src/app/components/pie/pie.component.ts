import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../../services/data/get.service';
import { AuthService } from '../../services/Authentication/auth.service';
import { Location } from '@angular/common';
import { quiz } from '../../model/quiz';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  total: number;
  temp: number;
  mark: number = parseInt(localStorage.getItem('mark'))
  point: number;
  id: string;
  quiz: quiz[];
  list_choosen;
  public pieChartLabels = ['Done', 'Fail']
  public pieChartData = [Math.round(((this.mark / this.total) * 100) * 100) / 100, 100 - (Math.round(((this.mark / this.total) * 100) * 100))];
  public pieChartType = 'pie';
  quiz2: quiz;
  constructor(
    private route: ActivatedRoute,
    private data: GetService,
    public authService: AuthService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mark = parseInt(localStorage.getItem('mark'));
      this.id = params.get('id');
      this.data.getquiz(this.id).pipe(
        map(quiz => this.quiz = quiz)

      ).subscribe(quiz => {
        this.total = quiz.length;
        this.point = Math.round((this.mark * (10 / this.total)) * 10) / 10;
        this.temp = Math.round(((this.mark / this.total) * 100) * 100) / 100
        this.pieChartData = [this.temp, 100 - this.temp];
      })

    })

  }
  list_question
  index_num;
  async onclick(index) {
    this.quiz2 = await this.quiz[index];
    this.index_num = index;
    this.list_question = this.quiz2.Answers;

  }
  list_answers = [];
  message = 'bug is here';

  same_answers = [];
  length_ang = [];
  true_answer() {
    for (let i = 0; i < this.quiz.length; i++) {
      for (let j = 0; j < this.quiz[i].Answers.length; j++) {
        if (this.quiz[i].AnswerId == this.quiz[i].Answers[j].Id) {
          this.list_answers[i] = j + 1;

        }

      }
    }
    // console.log(this.list_answers);

    this.list_choosen = JSON.parse(localStorage.getItem('choosen'));

    let a = [];
    let b = [];
    for (let i = 0; i < this.list_answers.length; i++) {
      if (this.list_answers[i] === this.list_choosen[i]) {
        a.push(this.list_answers[i]);
        b.push(this.list_answers[i])
      }
      else {
        a.push(null)
      }
    }
    this.length_ang = [...b];
    this.same_answers = [...a];

  }

  true = [];
  iscorrect(question) {
    let index_choosen = [];
    let curren_ques = question.getAttribute('data_index');
    // console.log(this.same_answers);
    this.true_answer();

    for (let i = 0; i < this.same_answers.length; i++) {
      if (this.same_answers[i] != null) {
        // console.log(this.same_answers[i]);
        index_choosen.push(Object.keys(this.same_answers)[i])
      }
      // console.log(this.true);

    }
    // console.log(index_choosen);

    // if(index_choosen.length === this.length_ang.length){
    //   this.true=[...index_choosen];
    // }


    // let index_choosen = Object.keys(this.same_answers);
    if (index_choosen.indexOf(curren_ques) == -1) {
      return false
    }
    return true


    // console.log(index_choosen);



  }
  Back() {
    localStorage.removeItem('choosen');
    localStorage.removeItem('mark');
    this._location.back();
  }


}
