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
  newestAccount: NewAccount;

  selectedRole;
  selectedType;

  roles = [
    "EMPLOYEE",
    "CUSTOMER"
  ];

  accountType = [
    "CHECKING",
    "SAVINGS"
  ];

  nav = [
    true,
    false,
    false,
    false,
    false,
    false
  ];

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
    this.nav[this.index] = true;
    this.index++;
  }

  setRole(){
    this.newestUser.role = this.selectedRole;
  }

  setAccountType(){
    this.newestAccount.type = this.selectedType;
  }

  makeUser(){

    // check values

    this.userservice.addUser(this.newestUser).subscribe(
      (data: User) => {
        this.userCreated = data;
        // console.log(this.userCreated);
        if(this.userCreated.role === "CUSTOMER"){
          this.createAccount();
        }
        else{
          alert("Please log in to access your account.")
        }
      })

  }

  createAccount() {
    this.newestAccount = new NewAccount(null, null, this.userCreated.userid);

    this.nav[0] = false;
    this.nav[1] = false;
    this.nav[2] = false;
    this.nav[3] = false;
    this.nav[4] = true;
  }

  sendAccount(){

    // check values

    console.log(this.newestAccount);

  }

}
