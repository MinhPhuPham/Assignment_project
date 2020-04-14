import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { quiz } from '../../model/quiz'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService { 

  constructor(private http : HttpClient) { }
  getquiz(id) : Observable<quiz[]> {
      return this.http.get<quiz[]>(`../../../assets/data/${id}.json`);
  }
}
