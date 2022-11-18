import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-personal-details',
  templateUrl: './more-personal-details.component.html',
  styleUrls: ['./more-personal-details.component.css']
})
export class MorePersonalDetailsComponent  {
  MorePersonalDetails:any={}; 

  Looks:any;
  Complexion:any;
  height:any;
  build:any;
  hobbies:any;

  constructor(private router: Router) {

    this.Looks = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).Looks
    this.Complexion = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).Complexion
    this.height = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).height
    this.build = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).build
    this.hobbies = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).hobbies

  }

  eventonKey(event: any) {
   this.MorePersonalDetails[event.target.name]=event.target.value;
   console.log( this.MorePersonalDetails);
  }
  gotoSignupSecondPage(){
    this.router.navigate(['Personal-Details']);
}
gotoSignupFourthPage(){
  localStorage.setItem('MorePersonalDetails', JSON.stringify(this.MorePersonalDetails))
    console.log(JSON.parse(localStorage.getItem('MorePersonalDetails') as string))
  this.router.navigate(['Residential-Details']);
}

}
