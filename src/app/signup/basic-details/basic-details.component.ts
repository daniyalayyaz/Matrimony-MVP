import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {
  BasicDetails:any={};

  ProfileCreatedFor = this.BasicDetails.ProfileCreatedFor
  GenderSelected = this.BasicDetails.GenderSelected
  constructor(private router: Router) {
    
    this.ProfileCreatedFor = JSON.parse(localStorage.getItem('BasicDetails') as string).ProfileCreatedFor
    this.GenderSelected = JSON.parse(localStorage.getItem('BasicDetails') as string).GenderSelected
  }

  eventonKey(event: any) {
   this.BasicDetails[event.target.name]=event.target.value;
   console.log( this.BasicDetails);
  }
  gotoSignupSecondPage(){
    localStorage.setItem('BasicDetails', JSON.stringify(this.BasicDetails))
    console.log(JSON.parse(localStorage.getItem('BasicDetails') as string))
    this.router.navigate(['Personal-Details']);

}

}
