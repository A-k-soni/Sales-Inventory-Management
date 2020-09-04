import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-add-itmes',
  templateUrl: './add-itmes.component.html',
  styleUrls: ['./add-itmes.component.scss']
})
export class AddItmesComponent implements OnInit {

  pName: string;
  pPrice: number;
  pQuantity: number;
  addItems: any;

  constructor(private http: HttpClient, private router: Router, private updateHeader: HeaderUpdateService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['3']);
      this.updateHeader.hide.next(false
      );
    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['8']);
      this.updateHeader.hide.next(true
      );
    } else if (sessionStorage.getItem('key') == '0') {
      alert('invalid Access');
      this.router.navigate(['3']);
    }
  }



  async add() {




    const values = {
      pName: this.pName,
      pPrice: this.pPrice,
      pQuantity: this.pQuantity
    };


    if (values.pName == undefined || values.pPrice == undefined || values.pQuantity == undefined) {
      alert("Please Enter All details");
    } else if (values.pPrice <= 0 || values.pQuantity <= 0) {

      alert("Numeric values must be greater than 0")

    } else {
      this.addItems = await this.http.post('http://localhost:8080/addItems', values).toPromise();

      if (this.addItems.message == 'success') {
        alert("Item Added Successfully");
        this.router.navigate(['7']);
      }
      if (this.addItems.message == 'failed') {
        alert("Item already Exists in Inventory , Please Use Increase option");
        this.router.navigate(['7']);
      }

    }
  }
  stockOpretion() {
    this.router.navigate(['7']);
  }
}
