import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  Date: number = Date.now();
  city: string;
  result: any = { main: {} };

  constructor(private router: Router, private authService: SocialAuthService, private http: HttpClient, private updateHeader: HeaderUpdateService) { }

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


  async getWeather() {

    const q = this.city;

    this.result = await this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + q + "&appid=24060611d6b664b49a70569445952941&units=metric").toPromise();
    console.log(this.result);

    this.city = "";




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
    this.authService.signOut();

  }

}
