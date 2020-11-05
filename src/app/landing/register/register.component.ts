import { Component, OnInit } from '@angular/core';
import { NewUser } from '@models/new-user';
import { User } from '@models/user';
import { NewAccount } from '@models/new-account';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // placeholderText: string = "Enter...";
  index:number = 1;
  newestUser: NewUser;

  selectedRole;
  roles = [
    "EMPLOYEE",
    "CUSTOMER"
  ];

  constructor() { }

  ngOnInit(): void {
    this.newestUser = new NewUser(
      null, null, null, null,
      null, null, null, null,
      null, null, null, null
    );
    // this.newestUser.role = "CUSTOMER";
    // console.log(this.newestUser);
  }

  increaseIndex(){
    this.index++;
  }

  setRole(){
    // console.log(this.selectedRole)
    this.newestUser.role = this.selectedRole;
  }

  makeUser(){

    console.log(this.newestUser);
  }

}
