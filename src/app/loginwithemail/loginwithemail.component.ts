import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageItem } from '../helpers/localStorageItem.enum';
import { UnsubscribeHandelr } from '../helpers/unsubscribe-handler';
import { takeUntil } from 'rxjs';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loginwithemail',
  templateUrl: './loginwithemail.component.html',
  styleUrls: ['./loginwithemail.component.css']
})
export class LoginwithemailComponent extends UnsubscribeHandelr implements OnInit {
  email: string;
  password: string;
  closeResult: string;
  data: any;
  constructor(private router: Router,
    private toasterservice: ToastrService, private modalService: NgbModal,
    private http: HttpClient, private appService: AppService) {
    super()
  }
  LoginDetails: any = {};
  @ViewChild('mymodal') mymodal: ElementRef | undefined;

  ngOnInit(): void {
    this.getPromotion();
  }
  gotoSignupFirstPage() {
    this.router.navigate(['Basic-Details']);
  }

  gotoVerification() {
    console.log(this.email);
    console.log(this.password);
    
    
    if (!this.email || !this.password) {
      // Show error message if email or password is empty
      console.log('Email and password are required');
      this.toasterservice.error("Email and password are required");
      return;
    }

    const body = {
      email: this.email,
      password: this.password
    };
    this.appService.Login(body).pipe(takeUntil(this.Unsubscribe$)).subscribe(res => {
      console.warn(res.user)
      if (res.user) {
        localStorage.setItem(LocalStorageItem.LOGGED_USER, JSON.stringify(res.user));
        this.toasterservice.success("User Saved Successfully");
        if (this.data.promotionShow = true) {
          this.open(this.mymodal);
        }
        this.router.navigateByUrl(`Dashboard`);
      }
    },err=>{
      this.toasterservice.error("Your Account Have Error Please Contact With Admin");
      
    }
    )

    // Integrating Profilelogin API
    // this.http.post('http://localhost:5000/api/user/Profilelogin', body).subscribe(response => {
    //   if (response.hasOwnProperty('id')) {
    //     console.log(response);
    //     // Saving response of API (JWT Token) in localStorage
    //     localStorage.setItem(LocalStorageItem.LOGGED_USER, JSON.stringify(response));
    //     // localStorage.setItem('CurrentUser', JSON.stringify(response))
    //     this.router.navigate(['Dashboard']);
    //   } else {
    //     console.log(response);
    //   }

    // });
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  getPromotion() {
    this.appService.getPromotion().subscribe((res: any) => {
      console.log(res);
      this.data = res
    });
  };
}
