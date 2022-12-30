import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { LocalStorageItem } from '../helpers/localStorageItem.enum';
import { UnsubscribeHandelr } from '../helpers/unsubscribe-handler';
import { Message } from '../models/message.modal';
import { User } from '../models/user.modal';

@Component({
  selector: 'app-filter-interest',
  templateUrl: './filter-interest.component.html',
  styleUrls: ['./filter-interest.component.css']
})
export class FilterInterestComponent  extends UnsubscribeHandelr  implements OnInit{

  personList: Array<User> = [];
  messagesList: Array<Message>;
  personsList: Array<User>  = [];
  MAx:string;
 Min:string;
 country:string;
 gender:string;
  
  constructor(private router: Router,
    private appService: AppService, private toasterservice: ToastrService, ) {
super()

     }

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
  filter(){

    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);
    var body={
      userId:  this.CurrentUser ._id,
      max_age:this.MAx,
      min_age:this.Min,
      country:this.country,
      gender:  this.CurrentUser .gender
      
          }
          this.CurrentUser = JSON.parse(loggedUser);
          console.warn(this.CurrentUser)
           this.appService.filter(body).pipe(
             takeUntil(this.Unsubscribe$))
             .subscribe((persons: Array<User>) => 
               {
                 this.personList = [];
                 this.personList = persons;
                 console.warn(this.personList)
                 if(this.personList.length>0)
                 {
                  this.toasterservice.success(`Record Found Successfully!`);
                 }
                 else{
                   this.toasterservice.error("NO RECORD FOUND!");

                 }
               }  
             );
          
        }
   
}
}