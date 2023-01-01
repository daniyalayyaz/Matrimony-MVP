import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class  LoginComponent {

  constructor(private router: Router,
    private toasterservice: ToastrService, 
    private appService: AppService) {}

  gotoSignupFirstPage(){
    this.router.navigate(['Basic-Details']);
}
gotologinwithemail(){
  this.router.navigate(['loginwithemail']);
}
gotoDashboard(){
  this.router.navigate(['Dashboard']);
}
gotoVerification(){
  this.router.navigate(['Verification']);
}
  async loginwithgmail(){
 var res=await (await this.appService.signwithgmail());;
 if(res.user?.email!=null)
 {
 
   console.warn("done");
 }
 


}

}