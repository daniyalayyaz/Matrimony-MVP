import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './signup/personal-details/personal-details.component';
import { MorePersonalDetailsComponent } from './signup/more-personal-details/more-personal-details.component';
import { ResidentialDetailsComponent } from './signup/residential-details/residential-details.component';
import { ProfessionalDetailsComponent } from './signup/professional-details/professional-details.component';
import { FamilyDetailsComponent } from './signup/family-details/family-details.component';
import { ContactDetailsComponent } from './signup/contact-details/contact-details.component';
import { ExtraDetailsComponent } from './signup/extra-details/extra-details.component';
import { BasicDetailsComponent } from './signup/basic-details/basic-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscribePackageComponent } from './subscribe-package/subscribe-package.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InterestsComponent } from './interests/interests.component';
import { FilterInterestComponent } from './filter-interest/filter-interest.component';
import { HttpClientModule } from '@angular/common/http';
import { VerificationpageComponent } from './verificationpage/verificationpage.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from "@angular/fire/compat"
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonalDetailsComponent,
    MorePersonalDetailsComponent,
    ResidentialDetailsComponent,
    ProfessionalDetailsComponent,
    FamilyDetailsComponent,
    ContactDetailsComponent,
    ExtraDetailsComponent,
    BasicDetailsComponent,
    DashboardComponent,
    ProfileComponent,
    SubscribePackageComponent,
    GalleryComponent,
    InterestsComponent,
    FilterInterestComponent,
    VerificationpageComponent,
    OtpVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgOtpInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
