import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { RequestType } from '../enums/request.enum';
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
  letschat(id:any){
    this.appService.letschat(this.CurrentUser._id, id).pipe(takeUntil(this.Unsubscribe$)).subscribe((persons) => {
     console.log(persons);
      this.router.navigate(['Chat/'+persons._id]);    })
      localStorage.setItem("id",id);
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
  filter(){

    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);
    var body={
      userId:  this.CurrentUser ._id,
      max_age:this.MAx,
      min_age:this.Min,
      country:"Afghanistan",
      gender:  this.CurrentUser.gender
      
          }

          
          this.CurrentUser = JSON.parse(loggedUser);
          console.warn(this.CurrentUser)
           this.appService.filter(this.CurrentUser ._id,this.MAx,this.Min,this.country,this.CurrentUser.gender).pipe(
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