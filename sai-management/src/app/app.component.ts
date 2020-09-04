import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderUpdateService } from './header-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'SaI-management';



  constructor(private router: Router, public headerUpdate: HeaderUpdateService) { };

  //observables , observer design pattern



  hide: boolean = false;

  ngOnInit(): void {

    this.headerUpdate.hide.subscribe((value) => {
      this.hide = value;
    });

  }

  page() {

    this.router.navigate(['3']);
  }
  page1() {

    this.router.navigate(['4']);
  }
  home() {


    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['']);
    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['11']);
    } else if (sessionStorage.getItem('key') == '0') {
      this.router.navigate(['']);
    }




  }

}
