import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  Date: number = Date.now();

  constructor(private router: Router, private updateHeader: HeaderUpdateService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['3']);
      this.updateHeader.hide.next(false
      );
    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['11']);
      this.updateHeader.hide.next(true
      );
    } else if (sessionStorage.getItem('key') == '0') {
      alert('invalid Access');
      this.router.navigate(['3']);
    }
  }


  inventoryWatch() {

    this.router.navigate(['6']);

  }

  stockOpretion() {
    this.router.navigate(['7'])
  }

  logOut() {
    this.updateHeader.hide.next(false
    );
    sessionStorage.removeItem('key');
    this.router.navigate(['3']);
  }

}
