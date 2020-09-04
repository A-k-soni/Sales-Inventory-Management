import { Component, OnInit } from '@angular/core';
import { HeaderUpdateService } from '../header-update.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})



export class BuyerComponent implements OnInit {
  del: string = sessionStorage.getItem('del');
  Date: number = Date.now();

  constructor(private http: HttpClient, private router: Router, private headerUpdate: HeaderUpdateService) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['3']);
      this.headerUpdate.hide.next(false
      );
    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['11']);
      alert("Admin cant access buyer page");
    } else if (sessionStorage.getItem('key') == '0') {
      this.router.navigate(['2']);
      this.headerUpdate.hide.next(true
      );
    }


  }



  profileDisplay() {



  }

  buy() {


  }



  logOut() {
    this.headerUpdate.hide.next(false
    );
    sessionStorage.removeItem('key');
    this.router.navigate(['3']);
  }



  async delProfile() {



  }
}
