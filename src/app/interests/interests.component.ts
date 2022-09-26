import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  constructor(private router: Router) {}

  users = [
    {
      name: "Amna Fairy",
      image: "https://bit.ly/3BeHQ6q",
      profession: "Doctor. Cardiologist",
      country: "https://bit.ly/3BbFu7p",
      distance: "5 Mile away",
    },
    {
      name: "Zara Fairy",
      image: "https://bit.ly/3BeHQ6q",
      profession: "Teacher",
      country: "https://bit.ly/3BbFu7p",
      distance: "7 Mile away",
    },
    {
      name: "Saira Fairy",
      image: "https://bit.ly/3BeHQ6q",
      profession: "Soft Engineer",
      country: "https://bit.ly/3BbFu7p",
      distance: "10 Mile away",
    },
    {
      name: "Esha Fairy",
      image: "https://bit.ly/3BeHQ6q",
      profession: "Pilot",
      country: "https://bit.ly/3BbFu7p",
      distance: "15 Mile away",
    },
  ];
  gotoFilterInterests(){
    this.router.navigate(['Filter-Interest']);
  }
}
