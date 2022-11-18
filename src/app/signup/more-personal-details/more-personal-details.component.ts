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
    if(localStorage.getItem('MorePersonalDetails') as string=='null') {
    this.Looks = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).Looks
    this.Complexion = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).Complexion
    this.height = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).height
    this.build = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).build
    this.hobbies = JSON.parse(localStorage.getItem('MorePersonalDetails') as string).hobbies
    }
    else{
      this.Looks =localStorage.getItem('MorePersonalDetails') && JSON.parse(localStorage.getItem('MorePersonalDetails') as string).Looks
      this.Complexion =localStorage.getItem('MorePersonalDetails') && JSON.parse(localStorage.getItem('MorePersonalDetails') as string).Complexion
      this.height =localStorage.getItem('MorePersonalDetails') && JSON.parse(localStorage.getItem('MorePersonalDetails') as string).height
      this.build =localStorage.getItem('MorePersonalDetails') && JSON.parse(localStorage.getItem('MorePersonalDetails') as string).build
      this.hobbies =localStorage.getItem('MorePersonalDetails') && JSON.parse(localStorage.getItem('MorePersonalDetails') as string).hobbies
      this.MorePersonalDetails={
        Looks:this.Looks,
        Complexion:this.Complexion,
        height:this.height,
        build:this.build,
        hobbies:this.hobbies
      }
    }
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
