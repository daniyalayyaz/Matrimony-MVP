import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {


  constructor(private router: Router) {}
  BasicDetails:any={};
  eventonKey(event: any) {
   this.BasicDetails[event.target.name]=event.target.value;
   console.log( this.BasicDetails);
  }
  gotoSignupSecondPage(){
    this.router.navigate(['Personal-Details']);

}

}
