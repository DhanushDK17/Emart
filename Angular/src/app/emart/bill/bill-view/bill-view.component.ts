import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { BillDetails } from '../../bill-details';
import { Bill } from '../../bill';
import { Router, ActivatedRoute } from '@angular/router';
import html2canvas from "html2canvas";
import jspdf from "jspdf";


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
  card: string ='';
  ship: string ='';
  cvv: string ='';
  currentBuyer: any;
    constructor(protected emartService: EmartService,
    protected router: Router, protected activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentBuyer=  JSON.parse(localStorage.getItem('i1')); 
    console.log(this.currentBuyer)
    this.cartItems = this.emartService.getAllCart();
    let size = this.cartItems.length;
    for (let i = 0; i < size; i++) {
      this.amount = this.amount + this.cartItems[i].price
    }
  }
  addBill() {
    if(!this.getLoggedIn()){
      this.printReceipt();
    }
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
    this.router.navigate(['confirm']);
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
    printReceipt() {
    let data = document.getElementById(`guestbill`);
    let height = data.getClientRects()[0].height;
    let width = data.getClientRects()[0].width;
    html2canvas(data).then(canvas => {
      const content = canvas.toDataURL('image/png');
      let pdfDocument = new jspdf(height > width ? 'portrait' : 'landscape' , 'px', [width,height]);
      pdfDocument.addImage(content, 'png', 0, 0, width, height);
      pdfDocument.save('dbaskitReceipt.pdf');
    })
  }
  getLoggedIn(){
    return sessionStorage.getItem('key');//retrieving session storage item for login nav bar stability
  }
}
