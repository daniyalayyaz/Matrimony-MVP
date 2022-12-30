import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { RequestType } from '../enums/request.enum';
import { LocalStorageItem } from '../helpers/localStorageItem.enum';
import { UnsubscribeHandelr } from '../helpers/unsubscribe-handler';
import { User } from '../models/user.modal';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent extends UnsubscribeHandelr implements OnInit {

  requestedPersonsList: Array<User> = [];


  constructor(private router: Router,
              private appService: AppService,
              private toasterservice: ToastrService,
              ) { 
                super()
              }
  
  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);
      this.ViewAllRequests(this.CurrentUser._id);
    }

  }

  ViewAllRequests(userId?: string) {
    this.appService.viewAllRequests(userId).pipe(takeUntil(this.Unsubscribe$))
    .subscribe((requestedPersons: Array<User>) => {
        if (requestedPersons.length > 0) {
          this.requestedPersonsList = requestedPersons;
        } else {
          this.toasterservice.warning("No Requests Found");
        }
    })
  }

  AcceptRequest(person: User) {
    this.appService.HandleRequest(this.CurrentUser._id, person._id, RequestType.ACCEPT).pipe(takeUntil(this.Unsubscribe$))
    .subscribe(response => {
      this.toasterservice.success("Request Accepted Successfully");
      this.gotoFilterInterests();
    })
  }

  CancelRequest(person: User) {
    this.appService.HandleRequest(this.CurrentUser._id, person._id, RequestType.CANCEL).pipe(takeUntil(this.Unsubscribe$))
    .subscribe(response => {
      this.toasterservice.warning("Request Cancelled Successfully");
    })
  }

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
