import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BasicDetailsComponent } from './signup/basic-details/basic-details.component';
import { ContactDetailsComponent } from './signup/contact-details/contact-details.component';
import { FamilyDetailsComponent } from './signup/family-details/family-details.component';
import { MorePersonalDetailsComponent } from './signup/more-personal-details/more-personal-details.component';
import { PersonalDetailsComponent } from './signup/personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './signup/professional-details/professional-details.component';
import { ResidentialDetailsComponent } from './signup/residential-details/residential-details.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'Basic-Details', component: BasicDetailsComponent},
  { path:'Personal-Details', component: PersonalDetailsComponent},
  { path:'More-Personal-Details', component: MorePersonalDetailsComponent},
  { path:'Residential-Details', component: ResidentialDetailsComponent},
  { path:'Professional-Details', component: ProfessionalDetailsComponent},
  { path:'Family-Details', component: FamilyDetailsComponent},
  { path:'Contact-Details', component: ContactDetailsComponent},
  { path: 'Dashboard', component: DashboardComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
