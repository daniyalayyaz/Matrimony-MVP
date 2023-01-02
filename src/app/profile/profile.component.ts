import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { LocalStorageItem } from '../helpers/localStorageItem.enum';
import { UnsubscribeHandelr } from '../helpers/unsubscribe-handler';
import { ProfileDetail } from '../models/profile-detail.modal';
import { User } from '../models/user.modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends UnsubscribeHandelr implements OnInit{
  pathleft: string = "../../assets/left.png";
  pathmessage: string = "../../assets/message.png";
  pathheart: string = "../../assets/pinkheart.png";
  pathright: string="../../assets/right.png"
  
  checknum?:boolean;
  profilepic?:boolean;
  profileDetails: User;

  constructor(private router: Router,
              private toasterservice: ToastrService,
              private appService: AppService) {
                super()
              }
              display = "none";
              openModal() {
                this.display = "block";
              }
              onCloseHandled() {
                this.display = "none";
              }
  ngOnInit(): void {
  
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    
    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);
    }

   let profileDetail = localStorage.getItem(LocalStorageItem.SELECTED_PROFILE);
   if (profileDetail) {
    this.profileDetails = JSON.parse(profileDetail);

   }
   this.checknum=this.CurrentUser.numberstatus;
   this.profilepic=this.CurrentUser.Profilestatus;
  }

  OnFavClick() {
    this.appService.AddRemoveFavourite(this.CurrentUser._id, this.profileDetails._id)
    .pipe(takeUntil(this.Unsubscribe$)).subscribe(response => {
      this.toasterservice.success("Add to Favourite Successfully");
    })
  
  }

  blockuser(id:any) {

   
    
    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);
    // var body={
    //   'loginId':this.CurrentUser._id,
    //   'userId':id
    // }
  // console.warn(body)
    this.appService.Blockuser(this.CurrentUser._id,id).pipe(takeUntil(this.Unsubscribe$)).subscribe(response => {
      
      this.toasterservice.success("User Blocked Successfully!");
    })
    }
  }

  OnMessageClick() {

  }

   profileInfo = [
    {
      title: "Personal Information",
      information:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Personal Information",
      information:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

   details = [
    {
        sect: "Sunni",
        religiousness: "Religious",
        profession: "Pharmacist",
        status: "Single",
        state: "London",
        country: "United Kingdom",
        registration: "To Find Partner",
    },
    {
        sect: "Sunni",
        religiousness: "Religious",
        profession: "Pharmacist",
        status: "Single",
        state: "London",
        country: "United Kingdom",
        registration: "To Find Partner",
    },
    {
        sect: "Sunni",
        religiousness: "Religious",
        profession: "Pharmacist",
        status: "Single",
        state: "London",
        country: "United Kingdom",
        registration: "To Find Partner",
    },
    {
        sect: "Sunni",
        religiousness: "Religious",
        profession: "Pharmacist",
        status: "Single",
        state: "London",
        country: "United Kingdom",
        registration: "To Find Partner",
    },
  ]
  gotoSubscribe(){
    this.router.navigate(['Subscribe']);
  }
 
}
