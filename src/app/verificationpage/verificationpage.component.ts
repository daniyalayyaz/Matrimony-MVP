import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificationpage',
  templateUrl: './verificationpage.component.html',
  styleUrls: ['./verificationpage.component.css']
})
export class VerificationpageComponent{

  constructor(private router: Router) { }

  gotoDashboard(){
    this.router.navigate(['Dashboard']);
  }

}
