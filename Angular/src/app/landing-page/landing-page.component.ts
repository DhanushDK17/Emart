import { Component, OnInit, ViewChild } from '@angular/core';
import { EmartService } from '../emart/emart.service';

import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';
import { Buyer } from '../emart/buyer';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('signUpForm') public buyerSignupForm: NgForm;
  buyerusername: string = '';
  buyerpassword: string = '';
  buyeremail: string = '';
  buyermobile: number;
  buyerdate: Date;
  buyers: any;
  sign: string;
  errorMessage: string;
  username: string;
  password: string;
  currentBuyer: any;
  buyer: boolean;
  constructor(protected emartService: EmartService, protected router: Router, protected activatedRoute: ActivatedRoute,
    protected loginService: LoginService) {
  }
  ngOnInit(): void {
    this.errorMessage = "";
  }
  addBuyer() {
    let buyer: Buyer = {
      id: 0,
      username: this.buyerusername,
      password: this.buyerpassword,
      email: this.buyeremail,
      mobile: this.buyermobile,
      date: this.buyerdate
    };

    this.emartService.addBuyer(buyer).subscribe(
      (response: any) => {
      }
    );
    this.router.navigate(['/']);
  }
  validate() {
    if (this.sign == 'buyer') {

      this.emartService
        .validateBuyer(this.username, this.password)
        .subscribe(
          (response) => {
            this.currentBuyer = response;
            this.emartService.setBuyerAndBills(this.currentBuyer);

            if (this.currentBuyer.id != 0) {
              this.loginService.loginBuyer(this.currentBuyer.id);
              sessionStorage.setItem('key', 'true');//storing session storage item as true for login nav bar stability
              this.router.navigate(['item-list']);
              this.emartService.getAllBills();
              this.emartService.getCurrentBuyer();
            }
            else {
              this.errorMessage = "Invalid username/password";
            }
          }
        );
    }
  }
}