import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { LocalStorageItem } from 'src/app/helpers/localStorageItem.enum';
import { UnsubscribeHandelr } from 'src/app/helpers/unsubscribe-handler';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent extends UnsubscribeHandelr implements OnInit {

  constructor(private router: Router,
              private appService: AppService,
              private toasterservice: ToastrService) { 
    super()
  }

  ngOnInit(): void {
    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);
    }
  }
  gotoEditProfile() {
    this.router.navigate(['Edit-Profile']);
  }
  gotoEditPassword() {
    this.router.navigate(['Edit-Password']);
  }
  gotoEditUsername() {
    this.router.navigate(['Edit-Username']);
  }
  gotoEditPhone() {
    this.router.navigate(['Edit-Phone']);
  }
  gotoEditEmail() {
    this.router.navigate(['Edit-Email']);
  }
  gotoEditPhotos() {
    this.router.navigate(['Edit-Photos']);
  }

  public updateUser() {

    const d = { 
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
      otherreligion:JSON.parse(localStorage.getItem('PersonalDetails') as string).OtherReligion,
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
      anotherqualification:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).AnyotherInfo,
      specialties:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).Qualification,
      qualification:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).OtherInfo,
      institution:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).Institution,
      income:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).Income,
      professionalInfo:JSON.parse(localStorage.getItem('ProfessionalDetails') as string).AnyotherInfo,
      fatherOccuption:JSON.parse(localStorage.getItem('FamilyDetails') as string).FatherOccupation,
      motherOccuption:JSON.parse(localStorage.getItem('FamilyDetails') as string).MotherOccupation,
      siblingsCountSisters:JSON.parse(localStorage.getItem('FamilyDetails') as string).SisterCount,
      siblingsCountBrothers:JSON.parse(localStorage.getItem('FamilyDetails') as string).BrotherCount,
      socialEconomic:JSON.parse(localStorage.getItem('FamilyDetails') as string).SocioeconomicStatus,
      familyInfo:JSON.parse(localStorage.getItem('FamilyDetails') as string).OtherFamilyInfo,
     }

    this.appService.updateUser(this.CurrentUser._id, d).pipe(takeUntil(this.Unsubscribe$)).subscribe(res => {
      this.toasterservice.success("User Updated Successfully");
      this.router.navigate(['Dashboard']);
    })
  }
}
