import { Component, OnInit } from '@angular/core';
import { NewUser } from '@models/new-user';
import { User } from '@models/user';
import { NewAccount } from '@models/new-account';

import { UserService } from '@userservice';
import { AccountService } from '@accountservice';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  index:number = 1;
  newestUser: NewUser;
  userCreated: User;

  selectedRole;
  roles = [
    "EMPLOYEE",
    "CUSTOMER"
  ];

  indexes = [
    true,
    false,
    false,
    false
  ]

  constructor(
    private userservice:UserService,
    private accountservice:AccountService) { }

  ngOnInit(): void {
    this.newestUser = new NewUser(
      null, null, null, null,
      null, null, null, null,
      null, null, null, null
    );
  }

  increaseIndex(){
    // this.index++;
    this.indexes[this.index] = true;
    this.index++;
  }

  setRole(){
    this.newestUser.role = this.selectedRole;
  }

  makeUser(){
    // console.log(this.newestUser);
    // this.user = new User(
    //   null, null, null,
    //   null, null, null);

    this.userservice.addUser(this.newestUser).subscribe(
      (data: User) => {
        this.userCreated = data;
        // console.log(this.userCreated);
        if(this.userCreated.role === "CUSTOMER"){
          this.addAccount();
        }
        else{
          alert("Please log in to access your account.")
        }
      })

  }

  addAccount() {
    console.log("adding account");
  }

}
