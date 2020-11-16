import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent implements OnInit {

  personalReadOnly: boolean = true;
  addressReadOnly: boolean = true;
  testInfo =
  {
    "infoid": 6,
    "ssn": "***-**-5050",
    "address": "308 Bristol St.",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "93447",
    "phone": "4745652222",
    "email": "riggs@gmail.com",
    "owner": {
        "userid": 105,
        "firstname": "Bradley",
        "lastname": "Riggs",
        "username": "rigg93",
        "password": "password",
        "role": "EMPLOYEE"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  editPersonal() {
    this.personalReadOnly = false;
  }

  savePersonal() {
    this.personalReadOnly = true;
  }

  editAddress() {
    this.addressReadOnly = false;
  }

  saveAddress() {
    this.addressReadOnly = true;
  }

}
