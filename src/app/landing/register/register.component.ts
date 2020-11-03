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

  newestUser: NewUser;
  createdUser: User;
  newAccount: NewAccount;

  constructor() { }

  ngOnInit(): void {
  }

}
