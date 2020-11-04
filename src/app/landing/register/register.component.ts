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
  createdUser: User;
  newAccount: NewAccount;

  constructor() { }

  ngOnInit(): void {
  }

  increaseIndex(){
    this.index++;
  }
  decreaseIndex(){

    if(this.index >= 2){
        this.index--;
    }

  }

  makeUser(){

  }

}
