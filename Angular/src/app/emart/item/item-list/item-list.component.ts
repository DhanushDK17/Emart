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
  filteredItems: any;
  categoriesWithSubcategories: {[key: string]: string[]} = {}; // initialize as empty object
  categories: any;
  search : String ="";
  selectedCategory: any = [];
  selectedSubCategory: any = [];
  constructor(
    protected emartService: EmartService,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.emartService.getAllItems().subscribe(
      (response: any) => {
        this.allItems = response;
        this.filteredItems=response;
        this.categories=this.getCategoriesWithSubcategories(response);
        console.log(response);
      }
    );
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
filterCat() {
  let subCategories = []
  console.log(this.selectedCategory)
  for (let index = 0; index < this.selectedCategory.length; index++) {
    const element = this.selectedCategory[index];
    subCategories = subCategories.concat(Array.from(element.value))
  }
  this.selectedSubCategory = subCategories;
  console.log(this.selectedSubCategory)
  this.filteredItems = this.allItems.filter( item => 
    this.selectedCategory.map(item => item.key).includes(item.subCategory.category.name)
  );
}
filterSub() {
  this.filteredItems = this.allItems.filter( item => 
    this.selectedSubCategory.includes(item.subCategory.name)
  );
  }
}