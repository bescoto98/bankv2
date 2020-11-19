import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '@models/user';
import { Information } from '@models/information';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  closeResult = '';

  usertype;

  sortBy;
  sortByValues = [
    { "val": 1, "type": "ID" },
    { "val": 2, "type": "Name" }
  ];

  employees = [
    {
        "userid": 102,
        "firstname": "Hamish",
        "lastname": "Henry",
        "username": "henr89",
        "password": "password",
        "role": "EMPLOYEE"
    },
    {
        "userid": 103,
        "firstname": "Carl",
        "lastname": "Burgess",
        "username": "burg76",
        "password": "password",
        "role": "EMPLOYEE"
    },
    {
        "userid": 104,
        "firstname": "Philip",
        "lastname": "Bauer",
        "username": "baue54",
        "password": "password",
        "role": "EMPLOYEE"
    },
    {
        "userid": 105,
        "firstname": "Bradley",
        "lastname": "Riggs",
        "username": "rigg93",
        "password": "password",
        "role": "EMPLOYEE"
    },
    {
        "userid": 112,
        "firstname": "Ellen",
        "lastname": "Veras",
        "username": "veras123",
        "password": "password",
        "role": "EMPLOYEE"
    }
  ];

  customers = [
    {
        "userid": 106,
        "firstname": "Wang",
        "lastname": "Rocha",
        "username": "roch63",
        "password": "password",
        "role": "CUSTOMER"
    },
    {
        "userid": 107,
        "firstname": "Clinton",
        "lastname": "Hughes",
        "username": "hugh59",
        "password": "password",
        "role": "CUSTOMER"
    },
    {
        "userid": 108,
        "firstname": "Ahmed",
        "lastname": "Stevenson",
        "username": "stev96",
        "password": "password",
        "role": "CUSTOMER"
    },
    {
        "userid": 109,
        "firstname": "Hilel",
        "lastname": "Drake",
        "username": "drak57",
        "password": "password",
        "role": "CUSTOMER"
    },
    {
        "userid": 110,
        "firstname": "Clark",
        "lastname": "Rich",
        "username": "rich53",
        "password": "password",
        "role": "CUSTOMER"
    },
    {
        "userid": 111,
        "firstname": "Byron",
        "lastname": "Byers",
        "username": "byer50",
        "password": "password",
        "role": "CUSTOMER"
    },
    {
        "userid": 114,
        "firstname": "Steven",
        "lastname": "Oregano",
        "username": "stevie",
        "password": "password",
        "role": "CUSTOMER"
    }
  ];

  listDisplayed;

  chosenUser;
  chosenUserInfo;

  constructor(private route: ActivatedRoute, private modalService: NgbModal)
  { this.route.params.subscribe( params => this.usertype = params.utype ); }

  ngOnInit(): void {

    switch (this.usertype) {
      case "e":
        this.listDisplayed = this.employees;
        break;
      case "c":
        this.listDisplayed = this.customers;
        break;
    }

  }

  goSort() {

    switch(this.sortBy){
      case 1:
        this.listDisplayed.sort((a,b) => (a.userid > b.userid) ? 1: -1);
        break;
      case 2:
        this.listDisplayed.sort((a,b) => (a.lastname > b.lastname) ? 1: -1);
        break;
    }

    // console.log(this.fakeUsers.sort((a,b) => (a.lastname > b.lastname) ? 1: -1));
    // console.log(this.fakeUsers.sort((a,b) => (a.role > b.role) ? 1: -1));
  }

  getInfo(picked: User){

    this.chosenUser = picked;

    this.chosenUserInfo = new Information(
      0,
      "***-**-****",
      "123 Red St.",
      "New York",
      "NY",
      "12362",
      "7149001234",
      "this@example.com",
      null
    );

    // console.log(this.chosenUser);
    // open(content);
  }

  open(picked: User, content) {

    this.chosenUser = picked;

    this.chosenUserInfo = new Information(
      0,
      "***-**-****",
      "123 Red St.",
      "New York",
      "NY",
      "12362",
      "7149001234",
      "this@example.com",
      null
    );

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
