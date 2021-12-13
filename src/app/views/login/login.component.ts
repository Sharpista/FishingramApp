import { TokenStorageService } from './../../services/token-storage.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup = new FormGroup({})
  constructor(private authService : LoginService,
              private tokenStorage: TokenStorageService,
              private router : Router,
              private formBuilder : FormBuilder) { }

  estaLogado = false;
  errorMessage = "";
  falhouLogin = false;

  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      email:[null],
      password:[null]
    })
  }

  onSubmit(){
    console.log(this.formLogin.value)
    this.authService.login(this.formLogin.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.acessToken);
        this.tokenStorage.saveUser(data);

        this.falhouLogin = false;
        this.estaLogado = true;
        this.router.navigateByUrl('/feed')
      },
      err =>{
        this.errorMessage = err.error.message;
        this.falhouLogin = true;
      }
    )
  }
  reloadPage(): void {
    window.location.reload();
  }
}
