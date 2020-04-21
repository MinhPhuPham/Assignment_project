import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/Authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPages implements CanActivate {
  static Guard: any;
  constructor(
    public authService : AuthService,
    public router : Router,
    private toastr: ToastrService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoggedIn) {
        this.toastr.error('You are not allowed to access this URL!', 'Sorry sir!',{
          positionClass:'toast-top-left', 
          timeOut: 3000,
        });
        this.router.navigate(['user'])
      }
    return true;
  }
  
}
