import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(protected loginService:LoginService, protected router:Router) { }

  ngOnInit(): void {
   
    this.loginService.logout();
    this.router.navigate(['/']);
    sessionStorage.removeItem('key'); //key :session storage key for navbar refresh
    localStorage.removeItem('i1'); //i1:local storage for current buyer
   localStorage.removeItem('i2');   //i2:local storage key for All items
  }

}
