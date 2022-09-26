import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-package',
  templateUrl: './subscribe-package.component.html',
  styleUrls: ['./subscribe-package.component.css']
})
export class SubscribePackageComponent{

  pakages = [
    {
      type: "Basic 3 Months",
      price: "500",
      monthly: "70",
      message: "100",
      contact: "20",
    },
    {
      type: "Standard 3 Months",
      price: "1000",
      monthly: "120",
      message: "200",
      contact: "40",
    },
    {
      type: "Gold 3 Months",
      price: "1500",
      monthly: "270",
      message: "300",
      contact: "60",
    },
    {
      type: "Diamond 3 Months",
      price: "2000",
      monthly: "300",
      message: "400",
      contact: "80",
    },
  ];

}
