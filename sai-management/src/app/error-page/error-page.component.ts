import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderUpdateService } from '../header-update.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private router: Router, private updateHeader: HeaderUpdateService) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('key')) {
      this.updateHeader.hide.next(false
      );
    } else if (sessionStorage.getItem('key') == '1') {

      this.updateHeader.hide.next(true
      );
    } else if (sessionStorage.getItem('key') == '0') {
      this.updateHeader.hide.next(true);
    }



  }

  goToPage() {

    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['']);
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

}
