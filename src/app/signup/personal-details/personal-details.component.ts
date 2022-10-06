import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent{

  constructor(private router: Router) {}
MartialStatus=[
  {
    value: 'Unmarried',
    label: 'Unmarried'
  },
  {
    value: 'Married',
    label: 'Married'
  },
  {
    value: 'Divorced',
    label: 'Divorced'
  },
  {
    value: 'Widow',
    label: 'Widow'
  },
  {
    value: 'Separated',
    label: 'Separated'
  },
];
Religious=[
  {
    value: 'Muslim',
    label: 'Muslim'
  },
  {
    value: 'Christian',
    label: 'Christian'
  },
  {
    value: 'Hindu',
    label: 'Hindu'
  },
  {
    value: 'Sikh',
    label: 'Sikh'
  },
  {
    value: 'Other',
    label: 'Other'
  },
];
Sect=[
  {
    value: 'Deobandi',
    label: 'Deobandi'
  },
  {
    value: 'Sunni',
    label: 'Sunni'
  },
  {
    value: 'Shia',
    label: 'Shia'
  },
  {
    value: 'Brailvi',
    label: 'Brailvi'
  },
  {
    value: 'Ahl-e-Hadees',
    label: 'Ahl-e-Hadees'
  },
  {
    value: 'Other',
    label: 'Other'
  },
];
ReligiosStatus=[
  {
    value: 'Very Religious',
    label: 'Very Religious'
  },
  {
    value: 'Religious',
    label: 'Religious'
  },
  {
    value: 'Weak Follower',
    label: 'Weak Follower'
  },
];
MotherTongue=[
  {
    value: 'Urdu',
    label: 'Urdu'
  },
  {
    value: 'English',
    label: 'English'
  },
  {
    value: 'Pushto',
    label: 'Pushto'
  },
  {
    value: 'Punjabi',
    label: 'Punjabi'
  },
  {
    value: 'Sindhi',
    label: 'Sindhi'
  },
  {
    value: 'Hindko',
    label: 'Hindko'
  },
  {
    value: 'Pahari',
    label: 'Pahari'
  },
  {
    value: 'Other',
    label: 'Other'
  },
];
castes=["Abbasi", "Abidi", "Afridi", "Agha", "Ahmedani", "Akhoond", "Alvi", "Ansari", "Arain", "Ashkani", "Atcha", "Awan", "Babar", "Badini", "Bahawalanzai", "Bahmani", "Baig", "Bajar", "Bajwa", "Baloch", "Bangash", "Bangial - Rajput", "Bangulzai", "Barazani", "Barija", "Barlas", "Barr", "Basra", "Bhabra", "Bhalli", "Bhamba", "Bhango", "Bhatti", "Bhinder - Jutt", "Bhullar", "Bijarani", "Bizenjo", "Brahmani", "Bugti", "Buledi", "Bulfati", "Burki", "Butt", "Buzdar", "Chachar", "Chagatai", "Chahal", "Chamkanni", "Chandio", "Changwani", "Chatha", "Chaudhry", "Chauhan", "Chechi", "Cheema", "Chishti", "Chughtai", "Chutani", "Damanis", "Dannarzai", "Dar", "Dareshak", "Darzada", "Dasti", "Daulat Khel", "Davi", "dawar", "Derawal", "Dhariwal", "Dhillon", "Dogar", "Domki", "Durrani", "Edo-Khel", "Fareedi", "Farooqi", "Firdausi", "Gabol", "Gadai", "Gadhi", "Gajani", "Gakhar", "Galani", "Gandapur", "Gardezi", "Gashkori", "Ghazali", "Ghazini", "Ghilzai", "Ghuman", "Gichki", "Gill", "Gjar", "Gola", "Gondal", "Gopang", "Goraya", "Gorgage", "Gorshani", "Gujjar", "Gurmani", "Hafiz Khel", "Hamadani", "Hashmi", "Hasni", "Hassani", "Hesbani", "Hooth", "Hussain", "Hussaini", "Hyderi", "Ibrahim", "Idrisi", "Isa Khel", "Isfahani", "Jadgal", "Jadoon - Gadoon", "Jadun", "Jafari", "Jagirani", "Jahangiri", "Jalali", "Jalbani", "Jamali", "Jamshidi", "Jandran", "Janjua - Rajput", "Janjuarajput", "Janwari", "Jappa", "Jarwar", "Jat", "Jatoi", "Jattak", "Jawanda", "Jhalawan", "Jiskani", "Johiya", "Jutt", "Kahloon", "Kakakhel", "Kakar", "Kakazai", "Kallu", "Kalmati", "Kalpar", "Kalyal", "Kambarzahi", "Kamboh", "Kasana", "Kashani", "Kassar", "Kayani", "Kazemi", "Kenagzai", "Kermani", "Khakwani", "Khalil", "Khalol", "Khan", "Khanum", "Khara", "Kharoti", "Khattak", "Khawaja", "Kheazai", "Khetran", "Khokhar", "Khorasani", "Khosa", "Khudiadadzai", "Khulozai", "Khushk", "Kiani", "Kirmani", "Korai", "Kuchelai", "Kuchis", "Kundi", "Kurd", "Lakhani", "Langah", "Langhani", "Lango", "Lanjwani", "Lari", "Lashari", "Leel", "Leghari", "Lehri", "Lodhi", "Loharani", "Lone", "Luna", "Lund", "Maghdud Khel", "Magsi", "Mahar", "Mahmud Khel", "Mahsud Khel", "Mahtam", "Makhdoom", "Malanhaans", "Malik", "Mamund", "Manduri", "Maneka", "Marri", "Marwat", "Mashwanis", "Masood", "Mastoi", "Mazari", "Meghwar", "Mengal", "Meo", "Mian", "Mian Rajput", "Minhas", "Minhas Mengal", "Mir", "Mirwani", "Mirza", "Mohamedzai", "Mohmand", "Montazeri", "Mughal", "Muker", "Mullagori - Mulla Ghori", "Muslim Khatris", "Naeem", "Nanda", "Naqvi", "sherwani", "Niazi", "Nishapuri", "Nizamani", "Noorani", "Noorzai", "Nothazai", "Nutkani", "Orakzai", "Osmani", "Pansota", "Paracha", "Pasha", "Passi", "Pitafi", "Popalzai", "Qaimkhani", "Qaisrani", "Qalat", "Qambrani", "Qazi", "Qizilbash", "Qureshi", "Rahija", "Rahmanzai", "Raisani", "Raja", "Rajput", "Ramay", "Rana", "Ranjha", "Rathore", "Razavi", "Reza", "Rind", "Rizvi", "Rodini", "Sabzvari", "Sadat", "Sadozai", "Sahi", "Sahni", "Sajjadi", "Salarzai", "Salehi", "Sanjarzai", "Sanjrani", "Sarbans", "Sarpara", "Sasooli", "Satti", "Sethwi", "Shahi", "Shahwani", "Shaikh", "Shambhani", "Shanzay", "Sheikh", "Sherzai", "Shilmani", "Shirani", "Sial", "Siddiqui", "Sindhi, Sindh, Pakistan", "Sistani", "Soomrani", "Sulemani", "Suri", "Swati", "Syed", "Tahirkheli", "Talpur", "Tareen", "Tarkani", "Tauqi", "Tirmizi", "Tokhi", "Toubzud", "Turkhel", "Umar Khel", "Umarzai", "Umrani", "Uthman Khel", "Wadeyla", "Wains", "Wasti", "Wazir", "Yazdani", "Yousafzai", "Yusaf Khel", "Zain", "Zand", "Zardari", "Zehri", "Zubairi"]
  gotoSignupThirdPage(){
    this.router.navigate(['More-Personal-Details']);
}
gotoSignupFirstPage(){
  this.router.navigate(['Basic-Details']);
}

}
