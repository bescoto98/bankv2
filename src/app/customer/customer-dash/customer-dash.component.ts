import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dash',
  templateUrl: './customer-dash.component.html',
  styleUrls: ['./customer-dash.component.css']
})
export class CustomerDashComponent implements OnInit {

  testAccounts =
  [
    {
        "accountid": 107,
        "balance": 500.0,
        "type": "CHECKING",
        "status": "OPEN",
        "approvedby": "Eagan Short",
        "createdon": "10-15-2015",
        "owner": {
            "userid": 107,
            "firstname": "Clinton",
            "lastname": "Hughes",
            "username": "hugh59",
            "password": "password",
            "role": "CUSTOMER"
        }
    },
    {
        "accountid": 108,
        "balance": 700.0,
        "type": "SAVINGS",
        "status": "OPEN",
        "approvedby": "Jerome Holder",
        "createdon": "08-15-2012",
        "owner": {
            "userid": 107,
            "firstname": "Clinton",
            "lastname": "Hughes",
            "username": "hugh59",
            "password": "password",
            "role": "CUSTOMER"
        }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
