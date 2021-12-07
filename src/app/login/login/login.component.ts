import { LoginService } from './../../services/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false
  formLogin:FormGroup = new FormGroup({})
  constructor(private _formBuilder : FormBuilder,
              private _loginService : LoginService,
              private  _router : Router) { }

  ngOnInit(): void {

    this.formLogin = this._formBuilder.group({
      email:[null],
      senha:[null]
    })
  }

  onSubmit(){
    const login ={
      email:this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value,
    }
    this._loginService.login(login as Login).subscribe(
      resp =>{
        const token = (<any> resp).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this._router.navigate(['/timeline'])
      }, err => {
        this.invalidLogin = true;
        this._router.navigate(['/login'])
      }
    )
  }

}
