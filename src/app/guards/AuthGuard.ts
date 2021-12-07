import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _jwtHelper: JwtHelperService, private _router : Router){

  }
  canActivate(){
   const token = localStorage.getItem('jwt');

    if(token && !this._jwtHelper.isTokenExpired(token)){
      return true;
    }
    this._router.navigate(["/login"])
    return false;
  }
}
