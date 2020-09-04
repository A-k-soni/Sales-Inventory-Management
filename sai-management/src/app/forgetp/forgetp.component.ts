import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetp',
  templateUrl: './forgetp.component.html',
  styleUrls: ['./forgetp.component.scss']
})
export class ForgetpComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  email: string;
  password: string;
  mobile: number;
  forgotResult: any;
  ngOnInit(): void {
    if (sessionStorage.getItem('key') == '1') {
      this.router.navigate(['11']);
    } else if (sessionStorage.getItem('key') == '0') {
      alert('invalid Access');
      this.router.navigate(['3']);
    }
  }

  async forget() {

    const values = {

      email: this.email,
      mobile: this.mobile,
      password: this.password
    }

    if (this.email == undefined || this.mobile == undefined || this.password == undefined) {
      alert("All Field Are Required");
    } else {
      this.forgotResult = await this.http.put('http://localhost:8080/forgot', values).toPromise();

      if (this.forgotResult.message == "success") {
        alert("Password Changed");
        this.router.navigate(['3'])
      } else if (this.forgotResult.message == "failed") {
        alert("Invalid Credentials");
        window.location.reload();
      }
    }

  }



}
