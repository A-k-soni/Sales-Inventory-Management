import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderUpdateService } from '../../header-update.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userName: string;
  password: string;
  loginData: any;

  constructor(private http: HttpClient, private router: Router, private headerUpdate: HeaderUpdateService) {

    if (!sessionStorage.getItem('key')) {
      this.router.navigate(['3']);
    } else {
      this.router.navigate(['/']);
    }


  }
  ngOnInit(): void {
  }
  async signin() {
    const values = {
      userName: this.userName,
      password: this.password
    }

    if (this.userName == undefined || this.password == undefined) {
      alert("One Or More Feilds Blanks");
    } else {
      this.loginData = await this.http.post('http://localhost:8080/signin', values).toPromise();
      console.log(this.loginData);

      if (this.loginData.roleid == 1) {
        sessionStorage.setItem('key', this.loginData.roleid);
        this.headerUpdate.hide.next(true);
        this.router.navigate(['11']);
        console.log("admin");
      } else if (this.loginData.roleid == 0) {
        sessionStorage.setItem('key', this.loginData.roleid);
        this.headerUpdate.hide.next(true);
        this.router.navigate(['2']);

      } else {
        alert("Wrong credential");
        window.location.reload();
      }
    }

  }
  register() {

    this.router.navigate(['4'])
  }

  forgetp() {
    this.router.navigate(['5']);
  }


}
