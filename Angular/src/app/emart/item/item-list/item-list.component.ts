import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  allItems: any;
  filteredItems: any[];
  categoriesWithSubcategories: {[key: string]: string[]} = {}; // initialize as empty object
  categories: any;
  search : String ="";
  maxPrice: any = 300;
  minRating: any = 0;
  maxp: any = 0;
  filterName: any = '';
  allReviews: any;
  constructor(
    protected emartService: EmartService,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.emartService.getAllItems().subscribe(
      (response: any) => {
        this.allItems = response;
        this.filteredItems=response;
        console.log(this.filteredItems);
        this.categories=this.getCategoriesWithSubcategories(response);
        for (let index = 0; index < this.allItems.length; index++) {
          const element = this.allItems[index];
          if (this.maxp < element.price) {
            this.maxp = element.price;
          }
        }
        this.emartService.getRating().subscribe(
          (response2: any) => {
            console.log(response2);
            this.allReviews = this.getAverageRatings(response2);  
           
            console.log(this.assignStockFromRating(response,response2));

            this.filteredItems=this.assignStockFromRating(response,response2)
          }
        );
      }
    );
   
    console.log(JSON.stringify(this.filteredItems));
    
    console.log(this.filteredItems);
  }

  displayItemDetails(itemID: number) {
    this.router.navigate(['/item-display/' + itemID]);
  } 

   getCategoriesWithSubcategories(json: any) {
    const categories: any = {};
  
    for (const item of json) {
      const categoryName = item.subCategory.category.name;
      const subCategoryName = item.subCategory.name;
  
      if (categoryName in categories) {
        categories[categoryName].add(subCategoryName);
      } else {
        categories[categoryName] = new Set([subCategoryName]);
      }
    }
    console.log(categories);
    return categories;
  }
filterCategories(category:any){
  console.log(category.key);
  this.filteredItems = this.allItems.filter( item => 
      item.subCategory.category.name == category.key
    );
}
filterSubcategories(subcategory:any){
  console.log(subcategory);
  this.filteredItems = this.allItems.filter( item => 
    item.subCategory.name == subcategory
  );
}
selectAll(){
  this.filteredItems = this.allItems;
}
searchy(){

  this.filteredItems = this.allItems.filter( item => 
    item.name.toUpperCase() == this.search.toUpperCase()
  );
  console.log(this.filteredItems);
}
filterItems() {
  console.log(this.maxPrice)
  this.filteredItems = this.allItems.filter(item =>
    item.price <= this.maxPrice)
}
filterItems2() {
  console.log(this.minRating)
  this.filteredItems = this.allItems.filter(item =>
    item.rating >= this.minRating)
}
filterUsingName() {
  this.filteredItems = this.allItems.filter(item => item.name.toLowerCase().includes(this.filterName.toLowerCase()))
}
formatLabel(value: number): string {
  return `${value}`;
}
getAverageRatings(reviews: any): any {
  for (let index = 0; index < this.allItems.length; index++) {
    const element = this.allItems[index];
    let sumRating = 0
    let ratingCount = 0
    for (let index = 0; index < reviews.length; index++) {
      const review = reviews[index];
      if (review.item == element.id) {
        sumRating += review.rating;
        ratingCount += 1
      }
    }
    if (ratingCount == 0) {
      element.rating = 0
    } else {
      element.rating = Math.round(sumRating/ratingCount);
    }
  }
  const itemRatings: any = {};

  for (const review of reviews) {
    const itemId = review.item;
    const rating = review.rating;

    if (itemId in itemRatings) {
      itemRatings.id =rating;
    } else {
      itemRatings.id = rating;
    }
  }

  const itemAverages: any= {};

  for (const id in itemRatings) {
    const ratings = itemRatings.id;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / ratings.length;
    itemAverages.id = average;
  }
console.log(itemAverages);
  return itemAverages;
}
assignStockFromRating(items: any, reviews: any) {
  reviews.forEach(review => {
    console.log(review.id)
    //if(item.id == )
  }); 
  return items
}
}