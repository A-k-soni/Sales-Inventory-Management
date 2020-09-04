import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {


  inventoryItems: any = [];

  constructor(private http: HttpClient, private router: Router, private updateHeader: HeaderUpdateService) {
    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['3']);
      this.updateHeader.hide.next(false
      );
    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['6']);
      this.updateHeader.hide.next(true
      );
    } else if (sessionStorage.getItem('key') == '0') {
      this.router.navigate(['']);
    }
  }

  async ngOnInit(): Promise<void> {
    const items = await this.http.get('http://localhost:8080/inventory').toPromise();
    this.inventoryItems = items;

  }

  manage() {
    this.router.navigate(['7']);
  }
  Home() {
    this.router.navigate(['11']);
  }

}
