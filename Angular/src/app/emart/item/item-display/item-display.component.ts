import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { SubCategory } from '../../sub-category';
import { Category } from '../../category';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  item: Item;
  category: Category;
  subCategory: SubCategory;
  reviewText: String;
  rating: number;
  cart: any;
  countInCart: number
  constructor(protected activatedRoute: ActivatedRoute,
    protected emartService: EmartService,
    protected router: Router) {
      this.cart = emartService.cartItems;
     }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id: any = params.get('iId');
      this.emartService.getItem(id).subscribe(
        (response: any) => {
          this.item = response;
          this.rating = 3;
          this.countInCart = this.cart.filter(item => item.id == this.item.id).length;
        }
      );
    });
  }
  handleBack() {
    history.go(-1);
  }
  addToCart(item: any) {
    this.emartService.addToCart(item);
    // this.router.navigate(['item-list']);
  }
  deleteCartItem(item: any) {
    this.emartService.deleteCartItem(item);
  }
  modifyRating(r: number) {
    if (r == this.rating) {
      this.rating = 0
    } else {
      this.rating = r
    }
  }
  addReview() {
    
  }

}
