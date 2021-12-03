import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup = new FormGroup({})
  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.formLogin = this._formBuilder.group({
      email:[null],
      senha:[null]
    })
  }

}
