import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageItem } from '../helpers/localStorageItem.enum';
import { UnsubscribeHandelr } from '../helpers/unsubscribe-handler';
import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginwithemail',
  templateUrl: './loginwithemail.component.html',
  styleUrls: ['./loginwithemail.component.css']
})
export class LoginwithemailComponent  extends UnsubscribeHandelr  implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router, private toasterservice: ToastrService,private http: HttpClient, private appService: AppService) { 
    super()
  }
  LoginDetails:any={};
  ngOnInit(): void {
  }
  gotoSignupFirstPage(){
    this.router.navigate(['Basic-Details']);}

    gotoVerification(){
      if (!this.email || !this.password) {
        // Show error message if email or password is empty
        console.log('Email and password are required');
        return;
      }
  
      const body = {
        email: this.email,
        password: this.password
      };
      this.appService.Login(body).pipe(takeUntil(this.Unsubscribe$)).subscribe(res => {
        console.warn(res.user)
        if (res.user) {
          localStorage.setItem(LocalStorageItem.LOGGED_USER, JSON.stringify(res.user));
          this.toasterservice.success("User Saved Successfully");
          this.router.navigateByUrl(`Dashboard`);
        }
       })
      // Integrating Profilelogin API
      // this.http.post('http://localhost:5000/api/user/Profilelogin', body).subscribe(response => {
      //   if (response.hasOwnProperty('id')) {
      //     console.log(response);
      //     // Saving response of API (JWT Token) in localStorage
      //     localStorage.setItem(LocalStorageItem.LOGGED_USER, JSON.stringify(response));
      //     // localStorage.setItem('CurrentUser', JSON.stringify(response))
      //     this.router.navigate(['Dashboard']);
      //   } else {
      //     console.log(response);
      //   }

      // });
    }
}
