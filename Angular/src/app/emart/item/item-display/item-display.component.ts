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
  count : number;
  constructor(protected activatedRoute: ActivatedRoute,
    protected emartService: EmartService,
    protected router: Router) {
     }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id: any = params.get('iId');
      this.emartService.getItem(id).subscribe(
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
}
