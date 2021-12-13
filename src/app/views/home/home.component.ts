import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false
  constructor(private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !! this.tokenStorageService.getToken();

    if(this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
    }
  }

}
