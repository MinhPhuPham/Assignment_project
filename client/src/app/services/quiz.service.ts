import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { quiz } from '../models/quizs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }
  getquiz(id) : Observable<quiz[]> {
      return this.http.get<quiz[]>(`../../assets/data/${id}.json`);
  }
}
