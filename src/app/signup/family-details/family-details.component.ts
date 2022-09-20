import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent{

  constructor(private router: Router) {}

  gotoSignupSeventhPage(){
    this.router.navigate(['Contact-Details']);
}
gotoSignupFourthPage(){
  this.router.navigate(['Residential-Details']);
}

}
