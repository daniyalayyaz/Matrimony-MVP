import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterInterestComponent } from './filter-interest/filter-interest.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InterestsComponent } from './interests/interests.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicDetailsComponent } from './signup/basic-details/basic-details.component';
import { ContactDetailsComponent } from './signup/contact-details/contact-details.component';
import { FamilyDetailsComponent } from './signup/family-details/family-details.component';
import { MorePersonalDetailsComponent } from './signup/more-personal-details/more-personal-details.component';
import { PersonalDetailsComponent } from './signup/personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './signup/professional-details/professional-details.component';
import { ResidentialDetailsComponent } from './signup/residential-details/residential-details.component';
import { SubscribePackageComponent } from './subscribe-package/subscribe-package.component';
import { VerificationpageComponent } from './verificationpage/verificationpage.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'Basic-Details', component: BasicDetailsComponent},
  { path:'Personal-Details', component: PersonalDetailsComponent},
  { path:'More-Personal-Details', component: MorePersonalDetailsComponent},
  { path:'Residential-Details', component: ResidentialDetailsComponent},
  { path:'Professional-Details', component: ProfessionalDetailsComponent},
  { path:'Family-Details', component: FamilyDetailsComponent},
  { path:'Contact-Details', component: ContactDetailsComponent},
  { path: 'Dashboard', component: DashboardComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'Subscribe', component: SubscribePackageComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Interests', component: InterestsComponent},
  {path: 'Filter-Interest', component: FilterInterestComponent},
  {path: 'verify/:id', component: VerificationpageComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
