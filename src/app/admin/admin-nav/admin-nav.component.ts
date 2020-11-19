import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  showUsers: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDash() {
    this.showUsers = true;
    this.router.navigate(['a']);

  }

  goUsers(usertype:string) {
    this.showUsers = false;
    this.router.navigate(['a/user',usertype]);
  }

  goAccounts() {
    this.showUsers = true;
    this.router.navigate(['a','accounts']);
  }

  goInfo(){
    this.showUsers = true;
    this.router.navigate(['a','info']);
  }

  goSearch() {
    this.showUsers = false;
    this.router.navigate(['a','search']);
  }

  logout() {
    this.router.navigate(['home']);
  }

}
