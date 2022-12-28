import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pathmessage: string = "../../assets/message.png";
  pathheart: string = "../../assets/pinkheart.png";

  personList=[{
    name: "ramish",
    age : 18,
    gender: "male",
    color:"white",
    city:"lahore",
    caste:"y",
    height:5.2,
    professional:"developer",
    appearance:"good",



  },
  {
    name: "daniyal",
    age : 22,
    gender: "male",
    color:"white",
    city:"lahore",
    caste:"y",
    height:5.2,
    professional:"developer pro",
    appearance:"exceellent",



  },
  {
    name: "Ahmed",
    age : 20,
    gender: "male",
    color:"white",
    city:"lahore",
    caste:"y",
    height:5.2,
    professional:"front-developer",
    appearance:"bad",



  },
  {
    name: "hassan",
    age : 19,
    gender: "male",
    color:"white",
    city:"lahore",
    caste:"y",
    height:5.2,
    professional:"devel",
    appearance:"enough",



  }


]
personList2=[{
  name: "Raffy",
  age : 20,
  gender: "male",
  color:"white",
  city:"lahore",
  caste:"y",
  height:5.2,
  professional:"developer",
  appearance:"good",



},
{
  name: "Murtaza",
  age : 23,
  gender: "male",
  color:"white",
  city:"islamabad",
  caste:"y",
  height:5.2,
  professional:"technician",
  appearance:"not bad",



},
{
  name: "Ali",
  age : 24,
  gender: "male",
  color:"white",
  city:"sailkot",
  caste:"y",
  height:5.3,
  professional:"front",
  appearance:"bsml",



},
{
  name: "Sherjeel",
  age : 19,
  gender: "male",
  color:"white",
  city:"lahore",
  caste:"y",
  height:5.2,
  professional:"devel",
  appearance:"enough",



}


]
}
