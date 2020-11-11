import { Component, OnInit } from '@angular/core';
// import { SortingService } from '@service/sorting.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  fakeUsers =
    [
      {
          "userid": 105,
          "firstname": "Eagan",
          "lastname": "Short",
          "username": "shor54",
          "password": "password",
          "role": "ADMIN"
      },
      {
          "userid": 101,
          "firstname": "Jerome",
          "lastname": "Holder",
          "username": "hold68",
          "password": "password",
          "role": "ADMIN"
      },
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
          "userid": 100,
          "firstname": "Bradley",
          "lastname": "Riggs",
          "username": "rigg93",
          "password": "password",
          "role": "EMPLOYEE"
      },
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
          "userid": 112,
          "firstname": "Ellen",
          "lastname": "Veras",
          "username": "veras123",
          "password": "password",
          "role": "EMPLOYEE"
      },
      {
          "userid": 113,
          "firstname": "John",
          "lastname": "Doe",
          "username": "jdoe",
          "password": "password",
          "role": "ADMIN"
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

  showAdmins: boolean = true;
  showEmployees: boolean = true;
  showCustomers: boolean = true;

  sortBy;
  sortByValues = [
    { "val": 1, "type": "ID" },
    { "val": 2, "type": "Name" },
    { "val": 3, "type": "Role" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  goSort() {
    // console.log(this.sortBy);
    // this.fakeUsers = this.sortingservice.sortUsersById(this.fakeUsers);
    // console.log(this.fakeUsers);
    // console.log(this.fakeUsers.sort((a,b) => (a.lastname > b.lastname) ? 1: -1));
    console.log(this.fakeUsers.sort((a,b) => (a.role > b.role) ? 1: -1));
  }

  filterUsers() {
    console.log("e:" + this.showEmployees);
    console.log("c:" + this.showCustomers);
  }
}
