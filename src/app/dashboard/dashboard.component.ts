import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

 messages = [
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

  // end off profile setting

  // this the 2nd options of profile setting / start
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

  onlinePersons = [
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
    {
      name: "Amna Fariy",
      age: "23 yrs",
      work: "Art Director",
      flag: "https://bit.ly/3BJ3wIg",
      image: "https://bit.ly/3SdMAix",
    },
  ];



}
