import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { LocalStorageItem } from '../helpers/localStorageItem.enum';
import { UnsubscribeHandelr } from '../helpers/unsubscribe-handler';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent extends UnsubscribeHandelr  implements OnInit {

  constructor(private router: Router,
    private toasterservice: ToastrService, 
    private appService: AppService) {
      
    super()
   }
   public latestnews?:boolean;
   public featurestatus?:boolean;
   public numberstatus?:boolean;
   public Profilestatus?:boolean;
   public Activenotification?:boolean;
   

  ngOnInit(): void {
    this.numberstatus=false;
    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);
 
    
      //   case Gender.FEMALE:
      //     this.GetOnlineUsers(Gender.MALE);
      //     break;
      //   case Gender.MALE:
      //     this.GetOnlineUsers(Gender.FEMALE);
      //     break
      // }
      }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.checkstatus()
  }

  




  statuschange() {   
    this.appService.statusupdatenotification(this.CurrentUser._id, this.latestnews,this.featurestatus,this.numberstatus,this.Profilestatus,this.Activenotification)
    .pipe(takeUntil(this.Unsubscribe$)).subscribe(response => {
     console.log(response)
      
      const body = {
        email: this.CurrentUser.email,
        password: "2233"
      };
      this.appService.Login(body).pipe(takeUntil(this.Unsubscribe$)).subscribe(res => {
        console.warn(res.user)
        if (res.user) {
          localStorage.setItem(LocalStorageItem.LOGGED_USER, JSON.stringify(res.user));
          this.toasterservice.success("Status Updated Successfully!");
          
        }
       })





      
    })
    
  }
  public savenumber(value:boolean){


    this.numberstatus=value;

 
  console.warn(this.numberstatus)
  this.statuschange()


}

public savefeature(value:boolean){
    

  this.featurestatus=value;


console.warn(this.numberstatus)
this.statuschange()


}

public latestnewss(value:boolean){
    

  this.latestnews=value;



this.statuschange()


}
public Activenotificationbox(value:boolean){
    

  this.Profilestatus=value;



this.statuschange()


}

public Profilestatuss(value:boolean){
    

  this.Profilestatus=value;



this.statuschange()


}

checkstatus(){

 
 
  this.Activenotification=this.CurrentUser.Activenotification;
  this.latestnews=this.CurrentUser.latestnews
  this.featurestatus=this.CurrentUser.featurestatus;
  this.Profilestatus=this.CurrentUser.Profilestatus;
  this.numberstatus=this.CurrentUser.numberstatus;
  // console.warn(this.Profilestatus)
  console.warn(this.numberstatus)
  


  
  }
}
