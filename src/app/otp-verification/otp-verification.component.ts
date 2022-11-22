import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
  Otpverification:any={};
  otp:any;
  constructor() { }

  ngOnInit(): void {
  }

  onOtpChange(event: any) {
    // this.Otpverification[event.target.name]=event.target.value;
    // console.log( event);
    this.Otpverification={
      otp:event
    }
   }
   gotoDashboard(){
console.log('Otp verification')
console.log(this.Otpverification)
   }
}
