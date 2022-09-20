import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {


  constructor(private router: Router) {}

  gotoSignupSecondPage(){
    this.router.navigate(['Personal-Details']);
}

}
