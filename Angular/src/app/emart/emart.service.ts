import { Injectable } from '@angular/core';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Item } from './item';
import { Bill } from './bill';
import { Seller } from './seller';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buyer } from './buyer';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class EmartService {
 
  categories: Category[];
  subCategories: SubCategory[];
  allItems: Item[];
  cartItems: any[];
  allBills: any;
  allSellers: Seller[];
  currentBuyer: any;
  allBuyers: Buyer[];

  constructor(protected http: HttpClient) {
    this.cartItems = [];
    this.allBills = [];
  }

  //Accessing end point for retrieving all items.
  getAllItems() {
    return this.http.get("http://localhost:8083/buyer-item-service/emart/item/all");
  }

  getCategories(): Category[] {
    return [].concat(this.categories);
  }

  getSubCategories(): SubCategory[] {
    return [].concat(this.subCategories);
  }
  setAllBills(billsList: any) {
    this.allBills = billsList;
  }
  getAllBills(): Bill[] {


    //i2:local storage for 
    localStorage.setItem('i2', JSON.stringify(this.allBills));
    return this.allBills;
  }
  //Accessing end point for retrieving an item.
  getItem(id: string): any {
    return this.http.get("http://localhost:8083/buyer-item-service/emart/item/" + id);
  }
  getReviews(id: string): any {
    return this.http.get("http://localhost:8083/buyer-item-service/emart/review/" + id);
  }

  addToCart(itemObj: any) {

    this.cartItems.push(itemObj);
    console.log('ca',this.cartItems)
  }

  getAllCart() {
    return [].concat(this.cartItems);
  }

  setAllCart(cartItems: any) {

    this.cartItems = cartItems;

  }

  deleteCartItem(itemNo: number) {
    let size = this.cartItems.length;
    for (let i = 0; i < size; i++) {
      if (this.cartItems[i].id == itemNo) {
        this.cartItems.splice(i, 1);
        break;
      }
    }
    return [].concat(this.cartItems);
  }

  //Accessing end point for adding the bill. 
  addBill(todayDate: Date, total: number) {
    let allBillDetails: any[] = [];
    for (let i = 0; i < this.cartItems.length; i++) {
      allBillDetails.push(
        {
          billDetailsId: 0,
          bill: null,
          item: this.cartItems[i]

        }
      );
    }
    let bill: any; 
    
    //i1:local storage for current buyer
    let a = JSON.parse(localStorage.getItem('i1'));
    if(this.getLoggedIn()){
    bill = {
      id: 0,
      type: 'credit',
      date: todayDate,
      remarks: '',
      amount: total,
      buyer: {
        id: a.id
      },
      allBillDetails: allBillDetails
    }}
    else{
      bill = {
        id: 0,
        type: 'credit',
        date: todayDate,
        remarks: '',
        amount: total,
        buyer: {
          id: 205
        },
        allBillDetails: allBillDetails
      }
    }
    this.cartItems = [];
    allBillDetails = [];
    return this.http.post("http://localhost:8083/buyer-item-service/emart/bill", bill);
  }
  getLoggedIn(){
    return sessionStorage.getItem('key');//retrieving session storage item for login nav bar stability
  }
  setBuyerAndBills(currentBuyer: any) {
    this.currentBuyer = currentBuyer;
    this.allBills = currentBuyer.allBills;
  }

  addreview(review: Review){
    console.log('service',review)
    this.http.post("http://localhost:8083/buyer-item-service/emart/review",review).subscribe((res) => console.log(res));
    console.log('service2',review)
  }


  addBuyer(buyer: Buyer) {
    //const body=JSON.stringify(buyer);
    return this.http.post("http://localhost:8083/BuyerSignupService/buyer", buyer);
  }
  getRating() {
    //i1:local storage for current buyer
   // let curUser = JSON.parse(localStorage.getItem('i1'));
    return this.http.get("http://localhost:8083/buyer-item-service/emart/rating");
  }
 
  //Accessing end point for buyer and retrieving its observable.
  getBuyer() {
    //i1:local storage for current buyer
    let curUser = JSON.parse(localStorage.getItem('i1'));
    return this.http.get("http://localhost:8083/login-service/emart/buyer/" + curUser.id);
  }

  getCurrentBuyer() {
    //i1:local storage for current buyer
    localStorage.setItem('i1', JSON.stringify(this.currentBuyer));
    return this.currentBuyer;
  }
  existBuyer() {
    //i1:local storage for current buyer
    //localStorage.setItem('i1', JSON.stringify(this.currentBuyer));
    return sessionStorage.getItem('key');
  }



  //Accessing end point for validating the buyer credintionals.
  validateBuyer(username: string, password: string) {
    let credentials = username + ":" + password;
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", credentials);
    return this.http.get("http://localhost:8083/login-service/emart/validate", { headers });
  }
}
