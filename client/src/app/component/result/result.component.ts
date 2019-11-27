import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {QuizService} from '../../services/quiz.service';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  total : number;
  temp : number ;
  mark :number;
  point : number;
  constructor(private route : ActivatedRoute, 
    private data : QuizService, 
    public authService : AuthService,) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
           this.mark = parseInt(localStorage.getItem('mark'));
     let id = params.get('id');
     this.data.getquiz(id).subscribe(quiz => {
      this.total = quiz.length;
      this.point = Math.round((this.mark * (10 / this.total)) * 10) / 10;
      this.temp = Math.round(((this.mark/this.total)*100) * 100) / 100        
     })    
   })
  }

}
