import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { BillDetails } from '../../bill-details';
import { Bill } from '../../bill';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent implements OnInit {
  cartItems: Item[];
  buyerName: string;
  buyerId: string = '1';
  todayDate: Date = new Date();
  amount: number = 0;
  allBills: Bill[];
  allBillDetails: BillDetails[];
  shipping: string = 'pickup';
  promo: string = '';
  currentBuyer: any;
    constructor(protected emartService: EmartService,
    protected router: Router, protected activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentBuyer=  JSON.parse(localStorage.getItem('i1')); 
    this.cartItems = this.emartService.getAllCart();
    let size = this.cartItems.length;
    for (let i = 0; i < size; i++) {
      this.amount = this.amount + this.cartItems[i].price
    }
  }
  addBill() {
    this.emartService.addBill(this.todayDate, this.amount)

      .subscribe(
        (response) => {
          this.emartService.getBuyer()
            .subscribe(
              (response) => {
                this.currentBuyer = response;
                this.emartService.setBuyerAndBills(this.currentBuyer);
                this.emartService.getAllBills();
               this.emartService.getCurrentBuyer();  
              }
            )
        }
      );
    this.router.navigate(['item-list']);
  }
  recalcAmount() {
    if (this.shipping == 'delivery') {
      this.amount += 20
    } else if (this.shipping == 'pickup') {
      this.amount -= 20
    }
  }
  applyPromo () {
    if (this.promo == "CS5391") {
      this.amount -= this.amount * 0.1
    }
  }
}
