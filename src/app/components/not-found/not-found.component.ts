import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private toastr: ToastrService) {}
 
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!',{
      timeOut: 5000
    })
  }

  ngOnInit() {
  }

}
