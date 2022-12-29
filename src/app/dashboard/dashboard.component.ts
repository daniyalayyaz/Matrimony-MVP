import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { Gender } from '../enums/genders.enum';
import { RequestType } from '../enums/request.enum';
import { LocalStorageItem } from '../helpers/localStorageItem.enum';
import { UnsubscribeHandelr } from '../helpers/unsubscribe-handler';
import { Message } from '../models/message.modal';
import { User } from '../models/user.modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends UnsubscribeHandelr implements OnInit {
status=1;
  personList: Array<User> = [];
  messagesList: Array<Message>;
  pathfemale: string = "../../assets/female.png";
  pathmessage: string = "../../assets/message.png";
  pathheart: string = "../../assets/pinkheart.png";
  pathmale: string = "../../assets/male.png"
  
  constructor(private router: Router,
              private toasterservice: ToastrService, 
              private appService: AppService) {
                super()
}

  ngOnInit(): void {
    this.status==1?'red':'yellow';
    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);

      switch(this.CurrentUser.gender) {
        case Gender.FEMALE:
          this.GetOnlineUsers(Gender.MALE);
          break;
        case Gender.MALE:
          this.GetOnlineUsers(Gender.FEMALE);
          break
      }

    }




    this.messagesList = [
      {
        image: "https://bit.ly/3RzZK9J",
        name: "Cristina Rohmer",
        msg: "That was wonderful. Thanks..",
        time: "01.02.21",
      },
      {
        image: "https://bit.ly/3RzZK9J",
        name: "Cristina Rohmer",
        msg: "That was wonderful. Thanks..",
        time: "01.02.21",
      },
      {
        image: "https://bit.ly/3RzZK9J",
        name: "Cristina Rohmer",
        msg: "That was wonderful. Thanks..",
        time: "01.02.21",
      },
    ];
  }

  public GetOnlineUsers(gender: Gender) {
    this.appService.onlineUser(gender).pipe(
      takeUntil(this.Unsubscribe$))
      .subscribe((persons: Array<User>) => 
        {
          this.personList = [];
          this.personList = persons;
        }  
      );
  }

  public onNearByClick() {
    this.appService.nearBy(this.CurrentUser.city).pipe(
      takeUntil(this.Unsubscribe$))
      .subscribe((users: Array<User>) => {
        this.toasterservice.success(`Users of ${this.CurrentUser.city} Loaded successfully`);
        this.personList = [];
        this.personList = users;
      })
  }

  public onOnlineClick() {
    switch(this.CurrentUser.gender) {
      case Gender.FEMALE:
        this.GetOnlineUsers(Gender.MALE);
        break;
      case Gender.MALE:
        this.GetOnlineUsers(Gender.FEMALE);
        break
    }
  }

  options = [
    {
      icon: 'fa-solid fa-heart',
      text: "Favourites",
      color1: "#ED7E9E",
      color2: "#E33365",
      route: ()=>{
        this.router.navigate(['favourites']);
      }
    },
    {
      icon: 'fa-solid fa-tags',
      text: "Packages Screen",
      color1: "#4DADC4",
      color2: "#1A6679",
      route: ()=>{
        this.router.navigate(['Subscribe']);

      }
    },
    {
      icon: 'fa-solid fa-message',
      text: "Chats",
      color1: "#4DC489",
      color2: "#1A7929",
      route: ()=>{}
    },
    {
      icon: 'fa-solid fa-user',
      text: "Profile",
      color1: "#4D6DC4",
      color2: "#1A2579",
      route: ()=>{
        this.router.navigate(['Profile']);

      }
    },
  ];

  optionCard = [
    {
      icon: 'fa-solid fa-search',
      text: "Find Match",
      color1: "#4DC489",
      color2: "#1A7929",
      route: ()=>{
        this.router.navigate(['Filter-Interest']);

      }

    },
    {
      icon: 'fa-solid fa-file-contract',
      text: "Privacy Policy",
      color1: "#4D6DC4",
      color2: "#1A2579",
      route: ()=>{}
    },
    {
      icon: 'fa-solid fa-phone',
      text: "Contact Us",
      color1: "#A94DC4",
      color2: "#6B0F86",
      route: ()=>{
        this.router.navigate(['Contact-Us']);

      }
    },
    {
      icon: 'fa-solid fa-file',
      text: "Terms & Conditions",
      color1: "#E54848",
      color2: "#7C0E0E ",
      route: ()=>{
        this.router.navigate(['Terms-And-Conditions']);

      }

    },
  ];
  
  gotoProfile(person: User) {
    localStorage.setItem(LocalStorageItem.SELECTED_PROFILE,JSON.stringify(person));
    this.router.navigate(['Profile']);
  }

  gotoGallery() {
    this.router.navigate(['Gallery']);
  }
  gotoInterests() {
    this.router.navigate(['Interests']);
  }
  gotoEditProfile() {
    this.router.navigate(['Edit-Profile']);
  }
  gotoNotifications() {
    this.router.navigate(['Notifications']);
  }
  gotoPreferences() {
    this.router.navigate(['Preferences']);
  }
  gotoPhotos() {
    this.router.navigate(['Edit-Photos']);
  }
  onSendInterestClick(person: User) {   
    this.appService.HandleRequest(this.CurrentUser._id, person._id, RequestType.SENDING)
    .pipe(takeUntil(this.Unsubscribe$)).subscribe(response => {
      this.toasterservice.success("Interest Sent Successfully!");
    })
  }

  AddtoFavClick(person: User) {
    this.appService.AddRemoveFavourite(this.CurrentUser._id, person._id)
    .pipe(takeUntil(this.Unsubscribe$)).subscribe(response => {
      this.toasterservice.success("Person has been added to Favourites Successfully!");
    })
  }


}
