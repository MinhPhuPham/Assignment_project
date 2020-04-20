import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { quiz } from '../../model/quiz'
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService { 
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  constructor(private http : HttpClient) { }
  getquiz(id) : Observable<quiz[]> {
      return this.http.get<quiz[]>(`../../../assets/data/${id}.json`);
  }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
