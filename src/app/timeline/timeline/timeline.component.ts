import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(private _jwtHelper: JwtHelperService, private _router : Router, private _loginService : LoginService) { }
  ngOnInit() {

  }

  isUserAuthenticated(){
    const token = localStorage.getItem('jwt');
    if(token && !this._jwtHelper.isTokenExpired(token)){
        return true;
    }else{
      return false;
    }
  }
  logout = () =>{
    this._loginService.logout();
  }

}
