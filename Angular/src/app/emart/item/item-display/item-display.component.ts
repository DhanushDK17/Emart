import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { SubCategory } from '../../sub-category';
import { Category } from '../../category';
import { Review } from '../../review';

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
  currentReviews: any;
  constructor(protected activatedRoute: ActivatedRoute,
    protected emartService: EmartService,
    protected router: Router) {
     }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('iId');
      this.emartService.getReviews(this.id).subscribe(
        (response: any) => {
          this.currentReviews = response;
          console.log(response);
        }
      );
      this.emartService.getItem(this.id).subscribe(
        (response: any) => {
          this.item = response;
          console.log(response);
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
      name: a.username
    }
  this.emartService.addreview(this.req); 
  }
  public onValueChange(event: Event): void {
    //console.log(event.target);
    const value = (event.target as any).value;
    this.review = value;
  }

}