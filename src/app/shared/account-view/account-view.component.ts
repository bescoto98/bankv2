import { Component, OnInit } from '@angular/core';

import { User } from '@models/user';
import { Account } from '@models/account';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  sortBy;
  sortByValues = [
    { "val": 1, "type": "Account ID" },
    { "val": 2, "type": "Owner ID" },
    { "val": 3, "type": "Approved By" }
  ];

  allaccounts = [
    {
        "accountid": 107,
        "balance": 500.0,
        "type": "CHECKING",
        "status": "CLOSED",
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
            "userid": 111,
            "firstname": "Byron",
            "lastname": "Byers",
            "username": "byer50",
            "password": "password",
            "role": "CUSTOMER"
        }
    },
    {
        "accountid": 109,
        "balance": 458.0,
        "type": "CHECKING",
        "status": "OPEN",
        "approvedby": "Hamish Henry",
        "createdon": "12-11-2013",
        "owner": {
            "userid": 110,
            "firstname": "Clark",
            "lastname": "Rich",
            "username": "rich53",
            "password": "password",
            "role": "CUSTOMER"
        }
    },
    {
        "accountid": 110,
        "balance": 4568.44,
        "type": "SAVINGS",
        "status": "CLOSED",
        "approvedby": "Carl Burgess",
        "createdon": "03-25-2014",
        "owner": {
            "userid": 111,
            "firstname": "Byron",
            "lastname": "Byers",
            "username": "byer50",
            "password": "password",
            "role": "CUSTOMER"
        }
    },
    {
        "accountid": 111,
        "balance": 45683.45,
        "type": "CHECKING",
        "status": "CLOSED",
        "approvedby": "Philip Bauer",
        "createdon": "02-23-2016",
        "owner": {
            "userid": 106,
            "firstname": "Wang",
            "lastname": "Rocha",
            "username": "roch63",
            "password": "password",
            "role": "CUSTOMER"
        }
    },
    {
        "accountid": 112,
        "balance": 1200.23,
        "type": "SAVINGS",
        "status": "OPEN",
        "approvedby": "Bradley Riggs",
        "createdon": "01-09-2017",
        "owner": {
            "userid": 114,
            "firstname": "Steven",
            "lastname": "Oregano",
            "username": "stevie",
            "password": "password",
            "role": "CUSTOMER"
        }
    },
    {
        "accountid": 113,
        "balance": 4562.11,
        "type": "CHECKING",
        "status": "OPEN",
        "approvedby": "Ellen Veras",
        "createdon": "05-15-2008",
        "owner": {
            "userid": 109,
            "firstname": "Hilel",
            "lastname": "Drake",
            "username": "drak57",
            "password": "password",
            "role": "CUSTOMER"
        }
    }
];
  listDisplayed;

  showChecking: boolean = true;
  showSavings: boolean = true;
  showOpen: boolean = true;
  showClosed: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.listDisplayed = this.allaccounts;
  }

  goSort() {

    switch(this.sortBy){
      case 1:
        this.listDisplayed.sort((a,b) => (a.accountid > b.accountid) ? 1: -1);
        break;
      case 2:
        this.listDisplayed.sort((a,b) => (a.owner.userid > b.owner.userid) ? 1: -1);
        break;
      case 3:
        this.listDisplayed.sort((a,b) => (a.approvedby > b.approvedby) ? 1: -1);
        break;
    }
  }

  filterValues() {
    this.listDisplayed = this.allaccounts.filter(temp => {
          if(temp.status=="CLOSED"&&this.showClosed==false){
            return false;
          }
          else if(temp.status=="OPEN"&&this.showOpen==false){
            return false;
          }
          else if(temp.type=="CHECKING"&&this.showChecking==false){
            return false;
          }
          else if(temp.type=="SAVINGS"&&this.showSavings==false){
            return false;
          }
          return true;
        }
    );
  }
}
