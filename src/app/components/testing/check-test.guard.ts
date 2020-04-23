import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TestingComponent } from './testing.component';

@Injectable({
  providedIn: 'root'
})
export class CheckTestGuard implements CanDeactivate<TestingComponent> {
  canDeactivate(
    component: TestingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return !component.isGoOut;
  }
  
  
}
