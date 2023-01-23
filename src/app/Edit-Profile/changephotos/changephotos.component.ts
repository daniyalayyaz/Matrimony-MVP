import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { reload } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-changephotos',
  templateUrl: './changephotos.component.html',
  styleUrls: ['./changephotos.component.css']
})
export class ChangephotosComponent implements OnInit {
  title = 'fileUpload';
  images: '';
  img: any;
  id: any;
  photo: any=[];
  multipleImages: any = [];
  gallary :any=[];
  // public projects: Project[]=[];
  displaySingleImage!: Boolean;
  displaySingleImageArray: any = [];
  convertImages: [];
   myFiles:string [] = [];

  thumbnail: any;
  imageUrl: any;
  constructor(private router: Router,
    private http: HttpClient,
    private form: FormBuilder,
    public appService: AppService,
    public activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private toasterservice: ToastrService,) {
    this.displaySingleImage = false;
    this.displaySingleImageArray = [];
  }
  url = environment.url;

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getImage();
    this.getgallary();
  }
  selectImage(event: any) {
    if (event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      this.img = event.target.files[0];
    }
  }
  selectMultipleImage(event: any) {
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        if(event.target.files[i].size > 500000){
          this.toasterservice.error("Too large Image");
          return ;
        }
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.multipleImages.push(event.target.result);
        }
      }
      this.img = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.img);
    this.appService.uploadImage(formData, this.id).subscribe((res: any) => {
      console.log(res);
      this.imageUrl = res.profile.image;
      this.getImage();
      this.router.navigate(['Dashboard']);

    })
  }
  onMultipleSubmit() {
    console.log(this.multipleImages);
    this.multipleImages.forEach((image : any)=> {
      this.appService.uploadMultipleImage({image}, this.id).subscribe((res: any) => {
      console.log(res);
      this.toasterservice.success("Images Uploaded Successfuly");
    })
    })
  }

  getImage() {
    this.appService.getSingleUser(this.id)
      .subscribe((data: any) => {
        const fullUrl = `${this.url}/${data.image}`
        this.imageUrl = fullUrl;
        console.log(this.imageUrl);
        
      }
      );
  }
  getgallary() {
    this.appService.getGallaryImage(this.id).subscribe((res: any) => {
      // this.base64TrimmedURL = base64Data;
      // this.createBlobImageFileAndShow();
      // console.log(res[0].image);
      // this.gallary = res[0].image;
      console.log(res);
      this.gallary = res.image;
    });
  // }
      // .subscribe((data: any) => {
      //   console.log(data);
        // data.image.forEach((_image:any) => {
        //   console.log(_image);
        // });
        // for (let img of data[0].image) {
        //   console.log(img);
        //   this.multipleImages = this.sanitizer.bypassSecurityTrustResourceUrl(this.multipleImages)
        //   console.log(this.multipleImages);
          // this.convertImages.push(this.sanitizer.bypassSecurityTrustUrl(img))
      //   }
      // }
      // );
  }


  gotoEditProfile() {
    this.router.navigate(['Edit-Profile']);
  }
  gotoInterests() {
    this.router.navigate(['Interests']);
  }
  gotoEditPassword() {
    this.router.navigate(['Edit-Password']);
  }
  gotoEditUsername() {
    this.router.navigate(['Edit-Username']);
  }
  gotoEditPhone() {
    this.router.navigate(['Edit-Phone']);
  }
  gotoEditEmail() {
    this.router.navigate(['Edit-Email']);
  }
  gotoEditPhotos() {
    this.router.navigate(['Edit-Photos']);
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['loginPage']);
  }
}
