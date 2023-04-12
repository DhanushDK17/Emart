import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(protected loginService:LoginService) { }
  ngOnInit(): void {
  }
  getLoggedIn(){
    return sessionStorage.getItem('key');//retrieving session storage item for login nav bar stability
  }
}
