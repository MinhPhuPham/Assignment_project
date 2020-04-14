import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../../services/data/get.service';
import { AuthService} from '../../services/Authentication/auth.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  total : number;
  temp : number ;
  mark :number =parseInt(localStorage.getItem('mark'))
  point : number;
  public pieChartLabels = ['Done' , 'Fail']
  public pieChartData = [Math.round(((this.mark/this.total)*100) * 100) / 100 , 100 - (Math.round(((this.mark/this.total)*100) * 100))];
  public pieChartType = 'pie';
  constructor(
    private route : ActivatedRoute, 
    private data : GetService, 
    private authService : AuthService,
    private location : Location
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       /* this.mark = parseInt(params.get('mark')); */
      this.mark = parseInt(localStorage.getItem('mark'));
      let id = params.get('id');
      this.data.getquiz(id).subscribe(quiz => {
        this.total = quiz.length;
        this.point = Math.round((this.mark * (10 / this.total)) * 10) / 10;
        this.temp = Math.round(((this.mark/this.total)*100) * 100) / 100        
        this.pieChartData = [this.temp, 100-this.temp];
      })    
     
      
    })
    
    
  }

}
