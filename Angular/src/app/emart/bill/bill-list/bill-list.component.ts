import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  allBills: any;
  currentBuyer: any;
  showBill: boolean;
  constructor(protected emartService: EmartService) { }
  ngOnInit(): void {
    this.currentBuyer=  JSON.parse(localStorage.getItem('i1'));//retrieving current buyer details from local storage  
    this.allBills = [];
    this.allBills =  JSON.parse(localStorage.getItem('i2'));//retrieving all bills from local storage
    if (this.allBills.length == 0) {
      this.showBill = false;
    }
    else {
      this.showBill = true;
    }
  }
}
