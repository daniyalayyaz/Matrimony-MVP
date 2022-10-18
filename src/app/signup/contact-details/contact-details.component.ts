import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  constructor(private router: Router) {}
  ContactDetails:any={};
  eventonKey(event: any) {
   this.ContactDetails[event.target.name]=event.target.value;
   console.log( this.ContactDetails);
  }
  gotoSignupSecondPage(){
    localStorage.setItem('ContactDetails', JSON.stringify(this.ContactDetails))
    console.log(JSON.parse(localStorage.getItem('ContactDetails') as string))
    this.router.navigate(['Personal-Details']);
}
gotoSignupFourthPage(){
  this.router.navigate(['Family-Details']);
}

}
