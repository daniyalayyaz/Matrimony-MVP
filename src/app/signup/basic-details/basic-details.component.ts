import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {


  constructor(private router: Router) {}
  Profilevalues = '';
  Gendervalues='';
  ProfileonKey(event: any) {
    this.Profilevalues = event.target.value;
    console.log(this.Profilevalues)
  }
  GenderonKey(event: any) {
    this.Gendervalues = event.target.value;
    console.log(this.Gendervalues)
  }
  gotoSignupSecondPage(){
    localStorage.setItem('ProfileCreatedFor', this.Profilevalues);
    localStorage.setItem('GenderSelected', this.Gendervalues);
    this.router.navigate(['Personal-Details']);

}

}
