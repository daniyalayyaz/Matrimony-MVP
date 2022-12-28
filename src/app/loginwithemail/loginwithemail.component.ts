import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginwithemail',
  templateUrl: './loginwithemail.component.html',
  styleUrls: ['./loginwithemail.component.css']
})
export class LoginwithemailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoSignupFirstPage(){
    this.router.navigate(['Basic-Details']);}

}
