import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residential-details',
  templateUrl: './residential-details.component.html',
  styleUrls: ['./residential-details.component.css']
})
export class ResidentialDetailsComponent{


  constructor(private router: Router) {}

  gotoSignupThirdPage(){
    this.router.navigate(['More-Personal-Details']);
}
gotoSignupSixthPage(){
  this.router.navigate(['Professional-Details']);
}


}
