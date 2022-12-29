import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginwithemail',
  templateUrl: './loginwithemail.component.html',
  styleUrls: ['./loginwithemail.component.css']
})
export class LoginwithemailComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router,private http: HttpClient) { }
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
      // Integrating Profilelogin API
      this.http.post('http://localhost:5000/api/user/Profilelogin', body).subscribe(response => {
        if (response.hasOwnProperty('id')) {
          console.log(response);
          // Saving response of API (JWT Token) in localStorage
          localStorage.setItem('CurrentUser', JSON.stringify(response))
          this.router.navigate(['dashboard']);
        } else {
          console.log(response);
        }

      });
    }
}
