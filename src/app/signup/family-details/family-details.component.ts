import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent{

  BrotherCount:any;
  FatherOccupation:any;
  MotherOccupation:any;
  OtherFamilyInfo:any;
  SisterCount:any;
  SocioeconomicStatus:any;

  constructor(private router: Router) {
    this.SocioeconomicStatus = JSON.parse(localStorage.getItem('FamilyDetails') as string).SocioeconomicStatus
    this.SisterCount = JSON.parse(localStorage.getItem('FamilyDetails') as string).SisterCount
    this.OtherFamilyInfo = JSON.parse(localStorage.getItem('FamilyDetails') as string).OtherFamilyInfo
    this.MotherOccupation = JSON.parse(localStorage.getItem('FamilyDetails') as string).MotherOccupation
    this.FatherOccupation = JSON.parse(localStorage.getItem('FamilyDetails') as string).FatherOccupation
    this.BrotherCount = JSON.parse(localStorage.getItem('FamilyDetails') as string).BrotherCount
  }
professions=["accountant", "actor", "actress", "air traffic controller", "architect", "artist", "attorney", "banker", "barber", "bookkeeper", "builder", "businessperson", "butcher", "carpenter", "cashier", "chef", "coach", "designer", "developer", "economist", "editor", "electrician", "engineer", "farmer", "filmmaker", "fisherman", "flight attendant", "jeweler", "judge", "lawyer", "mechanic", "musician", "painter", "pharmacist", "photographer", "pilot", "plumber", "police officer", "politician", "programmer", "receptionist", "salesperson", "singer", "teacher", "translator", "videographer", "waiter", "writer"]
FamilyDetails:any={};
eventonKey(event: any) {
 this.FamilyDetails[event.target.name]=event.target.value;
 console.log( this.FamilyDetails);
}
gotoSignupSeventhPage(){
  localStorage.setItem('FamilyDetails', JSON.stringify(this.FamilyDetails))
  console.log('Hi there!')
    this.router.navigate(['Contact-Details']);
}
gotoSignupFourthPage(){
  this.router.navigate(['Professional-Details']);
}

}
