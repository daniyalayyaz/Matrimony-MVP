import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { User } from '../models/user.modal';

@Component({
  selector: 'app-filter-interest',
  templateUrl: './filter-interest.component.html',
  styleUrls: ['./filter-interest.component.css']
})
export class FilterInterestComponent implements OnInit{

  personsList: Array<User>  = [];
  
  constructor(private router: Router,
    private appService: AppService) { }

  ngOnInit(): void {

  }
  pathfemale: string = "../../assets/female.png";
  pathmessage: string = "../../assets/message.png";
  pathheart: string = "../../assets/pinkheart.png";
  pathmale: string="../../assets/male.png"
  persons = [
    {
      name: "Dr Aiman Fairy",
      image: "https://bit.ly/3etyESV",
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
      image: "https://bit.ly/3etyESV",
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
      image: "https://bit.ly/3etyESV",
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
      image: "https://bit.ly/3etyESV",
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
      image: "https://bit.ly/3etyESV",
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
      image: "https://bit.ly/3etyESV",
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
}
