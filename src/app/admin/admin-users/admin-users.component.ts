import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  fakeUsers = [
    { "userid": 0,
      "firstname": "Greg",
      "lastname": "Oregano",
      "username": "weedgreg",
      "password": "*****",
      "role": "EMPLOYEE"
    },
    { "userid": 5,
      "firstname": "Mary",
      "lastname": "Sue",
      "username": "perfectmary",
      "password": "*****",
      "role": "CUSTOMER"
    }
  ];

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
    console.log(this.sortBy);
  }

  filterUsers() {
    console.log("e:" + this.showEmployees);
    console.log("c:" + this.showCustomers);
  }
}
