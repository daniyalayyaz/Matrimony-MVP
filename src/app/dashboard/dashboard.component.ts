import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { Gender } from '../enums/genders.enum';
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

  personList: Array<User> = [];
  messagesList: Array<Message>;
  pathfemale: string = "../../assets/female.png";
  pathmessage: string = "../../assets/message.png";
  pathheart: string = "../../assets/pinkheart.png";
  pathmale: string = "../../assets/male.png"
  
  constructor(private router: Router,
              private appService: AppService) {
                super()
               }

  ngOnInit(): void {
    this.appService.onlineUser(Gender.FEMALE).pipe(takeUntil(this.Unsubscribe$)).subscribe(persons => this.personList = persons);

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


  options = [
    {
      icon: 'fa-solid fa-list',
      text: "Matching Request",
      color1: "#ED7E9E",
      color2: "#E33365",
    },
    {
      icon: 'fa-solid fa-tags',
      text: "Packages Screen",
      color1: "#4DADC4",
      color2: "#1A6679",
    },
    {
      icon: 'fa-solid fa-message',
      text: "Chats",
      color1: "#4DC489",
      color2: "#1A7929",
    },
    {
      icon: 'fa-solid fa-user',
      text: "Profile",
      color1: "#4D6DC4",
      color2: "#1A2579",
    },
  ];

  optionCard = [
    {
      icon: 'fa-solid fa-headset',
      text: "Support",
      color1: "#4DC489",
      color2: "#1A7929",
    },
    {
      icon: 'fa-solid fa-file-contract',
      text: "Privacy Policy",
      color1: "#4D6DC4",
      color2: "#1A2579",
    },
    {
      icon: 'fa-solid fa-phone',
      text: "Contact us",
      color1: "#A94DC4",
      color2: "#6B0F86",
    },
    {
      icon: 'fa-solid fa-file',
      text: "Terms & Conditions",
      color1: "#E54848",
      color2: "#7C0E0E ",
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

  onSendInterestClick(person: User) {

  }


}
