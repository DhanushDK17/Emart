import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import html2canvas from "html2canvas";
import jspdf from "jspdf";
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
  printReceipt(id: any) {
    let data = document.getElementById(`bill${id}`);
    let height = data.getClientRects()[0].height;
    let width = data.getClientRects()[0].width;
    html2canvas(data).then(canvas => {
      const content = canvas.toDataURL('image/png');
      let pdfDocument = new jspdf(height > width ? 'portrait' : 'landscape' , 'px', [width,height]);
      pdfDocument.addImage(content, 'png', 0, 0, width, height);
      pdfDocument.save('dbaskitReceipt.pdf');
    })
  }
}
