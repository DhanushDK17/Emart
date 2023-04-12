import { Component, OnInit, ViewChild } from '@angular/core';
import { Buyer } from '../../buyer';
import { Router } from '@angular/router';
import { EmartService } from '../../emart.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.css']
})
export class BuyerSignupComponent implements OnInit {

  @ViewChild('signUpForm') public buyerSignupForm: NgForm;
  buyerusername: string = '';
  buyerpassword: string = '';
  buyeremail: string = '';
  buyermobile: number;
  buyerdate: Date;
  buyers: any;
  constructor(protected emartService: EmartService, protected router: Router) {
   }
  ngOnInit(): void {
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
}
