import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-increase-items-qty',
  templateUrl: './increase-items-qty.component.html',
  styleUrls: ['./increase-items-qty.component.scss']
})
export class IncreaseItemsQtyComponent implements OnInit {

  pName: string;
  pQuantity: number;
  increaseItems: any;

  constructor(private http: HttpClient, private router: Router, private updateHeader: HeaderUpdateService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('key')) {
      alert("Invalid Access");
      this.router.navigate(['3']);
      this.updateHeader.hide.next(false
      );
    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['10']);
      this.updateHeader.hide.next(true
      );
    } else if (sessionStorage.getItem('key') == '0') {
      this.router.navigate(['']);
    }
  }
  async increase() {

    const values = {
      pName: this.pName,
      pQuantity: this.pQuantity
    };


    if (this.pName == undefined || this.pQuantity == undefined) {
      alert("One Or Feilds Are Blanks");
    } else if (this.pQuantity <= 0) {
      alert("Quantity cant be Zero");
    } else {
      this.increaseItems = await this.http.put('http://localhost:8080/increaseItems', values).toPromise();


      if (this.increaseItems.message == 'success') {
        alert("Quantity Increased");
        this.router.navigate(['7']);
      } else if (this.increaseItems.message == 'failed') {
        alert("Product Not exists in Inventory , Please add as a new Product");
        window.location.reload();
      }

    }
  }
  stockOpretion() {
    this.router.navigate(['7']);
  }
}
