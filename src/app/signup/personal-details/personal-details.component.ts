import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent{

  constructor(private router: Router) {}

  gotoSignupThirdPage(){
    this.router.navigate(['More-Personal-Details']);
}
gotoSignupFirstPage(){
  this.router.navigate(['Basic-Details']);
}

}
