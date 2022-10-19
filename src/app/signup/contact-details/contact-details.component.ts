import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  constructor(private router: Router, private http: HttpClient) {}
  ContactDetails:any={};
  eventonKey(event: any) {
   this.ContactDetails[event.target.name]=event.target.value;
   console.log( this.ContactDetails);
  }
  RegisterUsers(): Observable<any> {
    return this.http.post("https://baltiapi.herokuapp.com/category/createProfile",  { 
    email: JSON.parse(localStorage.getItem('ContactDetails') as string).Email,
    personalContact: JSON.parse(localStorage.getItem('ContactDetails') as string).Phone,
    parentContact: JSON.parse(localStorage.getItem('ContactDetails') as string).ParentsPhone,
    socialLinkFb: JSON.parse(localStorage.getItem('ContactDetails') as string).FacebookLink,
    socialLinkInsta: JSON.parse(localStorage.getItem('ContactDetails') as string).InstaLink,
    socialLinkTwitter: JSON.parse(localStorage.getItem('ContactDetails') as string).TwitterLink,
    name: JSON.parse(localStorage.getItem('PersonalDetails') as string).name,
    profileCreated: JSON.parse(localStorage.getItem('BasicDetails') as string).ProfileCreatedFor,
    gender: JSON.parse(localStorage.getItem('BasicDetails') as string).GenderSelected,
    age: JSON.parse(localStorage.getItem('PersonalDetails') as string).age,
    status: JSON.parse(localStorage.getItem('PersonalDetails') as string).MartialStatus,
    religious:JSON.parse(localStorage.getItem('PersonalDetails') as string).Religious,
    sect:JSON.parse(localStorage.getItem('PersonalDetails') as string).Sect,
    caste:JSON.parse(localStorage.getItem('PersonalDetails') as string).Caste,
    religiousStatus:JSON.parse(localStorage.getItem('PersonalDetails') as string).ReligiousStatus,
    clan:JSON.parse(localStorage.getItem('PersonalDetails') as string).Clan,
    montherTonque:JSON.parse(localStorage.getItem('PersonalDetails') as string).MotherTongue,
    looks:JSON.parse(localStorage.getItem('MorePersonalDetails') as string).Looks,
    complexion:JSON.parse(localStorage.getItem('MorePersonalDetails') as string).Complexion,
    height:JSON.parse(localStorage.getItem('MorePersonalDetails') as string).height,
    build:JSON.parse(localStorage.getItem('MorePersonalDetails') as string).build,
    hobbies:JSON.parse(localStorage.getItem('MorePersonalDetails') as string).hobbies,
    country:JSON.parse(localStorage.getItem('ResidentialDetails') as string).Country,
    province:JSON.parse(localStorage.getItem('ResidentialDetails') as string).Province,
    city:JSON.parse(localStorage.getItem('ResidentialDetails') as string).City,
    house:JSON.parse(localStorage.getItem('ResidentialDetails') as string).HouseStatus,
    nationality:JSON.parse(localStorage.getItem('ResidentialDetails') as string).AnyOtherNationality,
    futurePlans:JSON.parse(localStorage.getItem('ResidentialDetails') as string).FuturePlanstoLiveIn,
    professional:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).Profession,
    jobStatus:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).JobStatus,
    workplace:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).Workplace,
    qualification:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).Qualification,
    institution:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).Institution,
    income:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).Income,
    professionalInfo:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).AnyotherInfo,
    fatherOccuption:JSON.parse(localStorage.getItem('FamilyDetails') as string).FatherOccupation,
    motherOccuption:JSON.parse(localStorage.getItem('FamilyDetails') as string).MotherOccupation,
    siblingsCountSisters:JSON.parse(localStorage.getItem('FamilyDetails') as string).SisterCount,
    siblingsCountBrothers:JSON.parse(localStorage.getItem('FamilyDetails') as string).BrotherCount,
    socialEconomic:JSON.parse(localStorage.getItem('FamilyDetails') as string).SocioeconomicStatus,
    familyInfo:JSON.parse(localStorage.getItem('FamilyDetails') as string).OtherFamilyInfo,
  
   },
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
      }),
    });
    
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
