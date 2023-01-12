import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-changephotos',
  templateUrl: './changephotos.component.html',
  styleUrls: ['./changephotos.component.css']
})
export class ChangephotosComponent implements OnInit {
  title = 'fileUpload';
  images: any = [];
  img: any;
  id: any;
  photo: any;
  multipleImages: any;
  constructor(private router: Router,
    private http: HttpClient,
    private form: FormBuilder,
    public appService: AppService,
    public activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getImages();
  }

  selectImage(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      this.images = file;
      console.log(this.images + "hello");
    }
  }
  selectMultipleImage(event:any){
    if (event.target.files) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.images);
    console.log(formData.get('image'));

    this.img = formData.get('image');
    this.appService.uploadImage(formData, this.id).subscribe((res: any) => {
      console.log(res.ProfileImage);

    })
  }
  onMultipleSubmit(){
      const formData = new FormData();
      for(let img of this.multipleImages){
        formData.append('image', img)
      }
      this.appService.uploadMultipleImage(formData, this.id).subscribe((res:any)=>{
        console.log(res);
      })
  }
  getImages() {
    this.appService.getSingleUser(this.id)
      .subscribe((data: any) => {
            // this.photo = data.image;
        // let objectURL = 'data:image/png;base64,' + data.image;
        // this.photo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        // console.log(this.photo);

        // this.photo = data.image
        // let objectURL = 'data:image/png;base64,' + data.image;
        // this.photo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      // });
    
    })
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
}
