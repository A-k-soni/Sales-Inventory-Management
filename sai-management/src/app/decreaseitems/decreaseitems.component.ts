import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-decreaseitems',
  templateUrl: './decreaseitems.component.html',
  styleUrls: ['./decreaseitems.component.scss']
})
export class DecreaseitemsComponent implements OnInit {

  pName: string;
  pQuantity: number;
  decreaseItems: any;

  constructor(private http: HttpClient, private router: Router, private updateHeader: HeaderUpdateService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['3']);
      this.updateHeader.hide.next(false
      );
    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['12']);
      this.updateHeader.hide.next(true
      );
    } else if (sessionStorage.getItem('key') == '0') {
      alert('invalid Access');
      this.router.navigate(['3']);
    }
  }

  async decrease() {
    const values = {
      pName: this.pName,
      pQuantity: this.pQuantity
    };


    if (this.pName == undefined || this.pQuantity == undefined) {
      alert("One Or Feilds Are Blanks");
    } else if (this.pQuantity <= 0) {
      alert("Quantity cant be Zero");
    } else {
      this.decreaseItems = await this.http.put('http://localhost:8080/decreaseItems', values).toPromise();

      if (this.decreaseItems.message == 'success') {
        alert("Quantity Decreased");
        this.router.navigate(['7']);
      } else if (this.decreaseItems.message == 'Not possible') {
        alert("Insufficient Quantity in Stock , please reduce input quantity");
        window.location.reload();
      } else if (this.decreaseItems.message == 'failed') {
        alert("Product Not exists in Inventory ")
        window.location.reload();
      }

    }
  }

  stockOpretion() {
    this.router.navigate(['7']);
  }
}
