import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-remove-items',
  templateUrl: './remove-items.component.html',
  styleUrls: ['./remove-items.component.scss']
})
export class RemoveItemsComponent implements OnInit {

  pName: string;


  removeItems: any;

  constructor(private http: HttpClient, private router: Router, private updateHeader: HeaderUpdateService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['3']);
      this.updateHeader.hide.next(false
      );

    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['9']);
      this.updateHeader.hide.next(true
      );

    } else if (sessionStorage.getItem('key') == '0') {
      this.router.navigate(['']);
    }
  }


  async remove() {

    const values = {
      pName: this.pName,

    };



    if (values.pName == undefined) {

      alert("Please Enter Product Name");
    } else {

      this.removeItems = await this.http.put('http://localhost:8080/removeItems', values).toPromise();

      if (this.removeItems.message == 'success') {
        alert("Item Removed Successfully")
        this.router.navigate(['7']);
      } else if (this.removeItems.message == 'failed') {
        alert("Invalid Opretion !!! Item Does Not Exsists In Inventory ");
        window.location.reload();
      }

    }
  }
  stockOpretion() {
    this.router.navigate(['7']);
  }
}
