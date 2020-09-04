import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private updateHeader: HeaderUpdateService) {
    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['']);
      this.updateHeader.hide.next(false
      );
    } else if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['11']);
      this.updateHeader.hide.next(true
      );
    } else if (sessionStorage.getItem('key') == '0') {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['']);
    }

  }

  ngOnInit(): void {


  }

}
