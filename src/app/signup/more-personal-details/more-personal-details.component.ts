import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-personal-details',
  templateUrl: './more-personal-details.component.html',
  styleUrls: ['./more-personal-details.component.css']
})
export class MorePersonalDetailsComponent  {

  constructor(private router: Router) {}
  MorePersonalDetails:any={};
  eventonKey(event: any) {
   this.MorePersonalDetails[event.target.name]=event.target.value;
   console.log( this.MorePersonalDetails);
  }
  gotoSignupSecondPage(){
    this.router.navigate(['Personal-Details']);
}
gotoSignupFourthPage(){
  this.router.navigate(['Residential-Details']);
}

}
