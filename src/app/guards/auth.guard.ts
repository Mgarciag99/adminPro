import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private UserService: UserService,
    private Router: Router

  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return this.UserService.validateToken()
    .pipe(
      tap( isLogged => {
        if( !isLogged ){
          this.Router.navigateByUrl('/login');
        }
      })
    );
  }
  
}
