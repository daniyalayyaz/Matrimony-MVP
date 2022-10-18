import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent{

  constructor(private router: Router) {}
professions=["accountant", "actor", "actress", "air traffic controller", "architect", "artist", "attorney", "banker", "barber", "bookkeeper", "builder", "businessperson", "butcher", "carpenter", "cashier", "chef", "coach", "designer", "developer", "economist", "editor", "electrician", "engineer", "farmer", "filmmaker", "fisherman", "flight attendant", "jeweler", "judge", "lawyer", "mechanic", "musician", "painter", "pharmacist", "photographer", "pilot", "plumber", "police officer", "politician", "programmer", "receptionist", "salesperson", "singer", "teacher", "translator", "videographer", "waiter", "writer"]
FamilyDetails:any={};
eventonKey(event: any) {
 this.FamilyDetails[event.target.name]=event.target.value;
 console.log( this.FamilyDetails);
}
gotoSignupSeventhPage(){
  localStorage.setItem('FamilyDetails', JSON.stringify(this.FamilyDetails))
    console.log(JSON.parse(localStorage.getItem('FamilyDetails') as string))
    this.router.navigate(['Contact-Details']);
}
gotoSignupFourthPage(){
  this.router.navigate(['Professional-Details']);
}

}
