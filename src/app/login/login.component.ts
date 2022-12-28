import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  gotoSignupFirstPage(){
    this.router.navigate(['Basic-Details']);
}
gotologinwithemail(){
  this.router.navigate(['loginwithemail']);
}
gotoDashboard(){
  this.router.navigate(['Dashboard']);
}
gotoVerification(){
  this.router.navigate(['Verification']);
}
}
