import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { SubCategory } from '../../sub-category';
import { Category } from '../../category';
import { Review } from '../../review';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  item: Item;
  category: Category;
  subCategory: SubCategory;
  count : number;
  review: string ="";
  req: Review;
  id: any;
  //rating:number;
  currentReviews: any;
  rating: number;
  constructor(protected activatedRoute: ActivatedRoute,
    protected emartService: EmartService,
    protected router: Router) {
     }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('iId');
      this.emartService.getItem(this.id).subscribe(
        (response: any) => {
          this.item = response;
          console.log(response);
        }
      ); 
      this.emartService.getReviews(this.id).subscribe(
        (response: any) => {
          this.currentReviews = response;
          console.log('43',response);
        }
      );
    });
  }

  addToCart(item: any) {
    for (let i = 0; i < this.count; i++) {
    this.emartService.addToCart(item);
    this.router.navigate(['item-list']);
  }
}

  addReview() {
    let a = JSON.parse(localStorage.getItem('i1'));
    this.req = {
      id: null,
      item: this.id,
      review: this.review,
      name: a.username,
      rating: this.rating
    }
  this.emartService.addreview(this.req); 
  }
  public onValueChange(event: Event): void {
    //console.log(event.target);
    const value = (event.target as any).value;
    this.review = value;
  }

  getLoggedIn(){
    return sessionStorage.getItem('key');//retrieving session storage item for login nav bar stability
  }

  login(){
    this.router.navigate(['login']);
  }
  guest(){
    this.router.navigate(['login']);
  }
  handleBack() {
    history.go(-1);
  }
 
  
    
  
}