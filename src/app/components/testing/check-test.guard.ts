import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { TestingComponent } from './testing.component';
import {GetService} from '../../services/data/get.service'

@Injectable({
  providedIn: 'root'
})
export class CheckTestGuard implements CanDeactivate<TestingComponent> {
  constructor(private getdata: GetService){}
  canDeactivate(
    component: TestingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
    
    let url: string =  currentState.url;
    if (!component.isGoOut) {
      component.isGoOut = false;
      return window.confirm('Are you sure want Discard this Test??');
    }
    else{
    return true;
  }
}
  
  
}
