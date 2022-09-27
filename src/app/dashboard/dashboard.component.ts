import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) { }

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
  pathfemale: string = "../../assets/female.png";
  pathmessage: string = "../../assets/message.png";
  pathheart: string = "../../assets/pinkheart.png";
  pathmale: string = "../../assets/male.png"
  persons = [
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3SdMAix",
      gender: "Female",
      age: "24",
      cast: "shah",
      training: "PG Trainee",
      profession: "Psychologist",
      city: "Lahore",
      appearance: "Good Looking",
      color: "White",
      height: "5'5 Tall",
    },
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3SdMAix",
      gender: "Female",
      age: "24",
      cast: "shah",
      training: "PG Trainee",
      profession: "Psychologist",
      city: "Lahore",
      appearance: "Good Looking",
      color: "White",
      height: "5'5 Tall",
    },
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3SdMAix",
      gender: "Female",
      age: "24",
      cast: "shah",
      training: "PG Trainee",
      profession: "Psychologist",
      city: "Lahore",
      appearance: "Good Looking",
      color: "White",
      height: "5'5 Tall",
    },
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3SdMAix",
      gender: "Female",
      age: "24",
      cast: "shah",
      training: "PG Trainee",
      profession: "Psychologist",
      city: "Lahore",
      appearance: "Good Looking",
      color: "White",
      height: "5'5 Tall",
    },
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3SdMAix",
      gender: "Female",
      age: "24",
      cast: "shah",
      training: "PG Trainee",
      profession: "Psychologist",
      city: "Lahore",
      appearance: "Good Looking",
      color: "White",
      height: "5'5 Tall",
    },
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3SdMAix",
      gender: "Female",
      age: "24",
      cast: "shah",
      training: "PG Trainee",
      profession: "Psychologist",
      city: "Lahore",
      appearance: "Good Looking",
      color: "White",
      height: "5'5 Tall",
    },
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3SdMAix",
      gender: "Female",
      age: "24",
      cast: "shah",
      training: "PG Trainee",
      profession: "Psychologist",
      city: "Lahore",
      appearance: "Good Looking",
      color: "White",
      height: "5'5 Tall",
    },
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3SdMAix",
      gender: "Female",
      age: "24",
      cast: "shah",
      training: "PG Trainee",
      profession: "Psychologist",
      city: "Lahore",
      appearance: "Good Looking",
      color: "White",
      height: "5'5 Tall",
    },
  ];
  gotoProfile() {
    this.router.navigate(['Profile']);
  }
  gotoGallery() {
    this.router.navigate(['Gallery']);
  }
  gotoInterests() {
    this.router.navigate(['Interests']);
  }


}
