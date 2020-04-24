import { Injectable } from '@angular/core';
import { Observable , of, throwError } from 'rxjs';
import { quiz } from '../../model/quiz'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class GetService { 
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  constructor(private http : HttpClient,  private toastr: ToastrService, public router : Router) { }
  getquiz(id) : Observable<quiz[]> {
      return this.http.get<quiz[]>(`../../../assets/data/data-format/${id}.json`)
                      .pipe(
                        catchError((err)=>{
                          this.toastr.error('Data Not Available! Will fix soonest', 'We are sorry!',{
                            positionClass:'toast-top-center', 
                            timeOut: 2000,
                          });
                          this.router.navigate(['exam']);
                          return throwError(err)
                        })
                      )                  
    }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
