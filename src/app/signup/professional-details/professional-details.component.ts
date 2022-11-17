import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  ProfessionSelect: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
qualifications=["Allergy", "Andrology", "Anesthesiology", "Cardiacsurgery", "Cardiology", "Community", "Dentistry", "Dermatology", "DiabetesandEndocrinology", "E.N.T", "Gastroenterology", "GeneralPractice", "GeneralSurgery", "Gynae/Obs", "Hepatology", "Medicine", "Nephrology", "Neurology", "Neurosurgery", "Nutrition", "Oncology", "Ophthalmology", "Orthopedics", "Paediatricsurgery", "Paediatrics", "Pathology", "Physiotherapy", "PlasticSurgery", "Psychiatry", "PsychologyPulmonology", "Radiology", "Rheumatology", "Urology"]
ProfessionalDetails:any={};
eventonKey(event: any) {
 this.ProfessionalDetails[event.target.name]=event.target.value;
 console.log( this.ProfessionalDetails);
}  
gotoSignupSeventhPage(){
  localStorage.setItem('ProfessionalDetails', JSON.stringify(this.ProfessionalDetails))
    console.log(JSON.parse(localStorage.getItem('ProfessionalDetails') as string))
    this.router.navigate(['Family-Details']);
}
gotoSignupFourthPage(){
  this.router.navigate(['Residential-Details']);
}

}
