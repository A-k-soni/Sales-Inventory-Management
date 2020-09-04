import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-stock-opretion',
  templateUrl: './stock-opretion.component.html',
  styleUrls: ['./stock-opretion.component.scss']
})
export class StockOpretionComponent implements OnInit {

  constructor(private router: Router, private updateHeader: HeaderUpdateService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['3']);
      this.updateHeader.hide.next(false
      );

    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['7']);
      this.updateHeader.hide.next(true
      );

    } else if (sessionStorage.getItem('key') == '0') {
      this.router.navigate(['']);
    }

  }


  GoToItemAdd() {
    this.router.navigate(['8']);

  }
  GoToItemremove() {
    this.router.navigate(['9']);
  }
  GoToItemIncrease() {
    this.router.navigate(['10']);
  }

  inventoryWatch() {
    this.router.navigate(['6']);
  }

  Home() {
    this.router.navigate(['11']);
  }
  GoToItemDecrease() {
    this.router.navigate(['12']);
  }

}
