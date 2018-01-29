import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserAuthService } from '../services/auth/user-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService:UserAuthService,
    private router:Router){

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.loggedIn){
      return true;
    } else {
      //window.alert("Sign in to view this page.");
      //this.router.navigate(['/login']);
      return false;
    }

  }
}
