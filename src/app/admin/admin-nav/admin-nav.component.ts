import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDash() {
    this.router.navigate(['a','dashboard']);

  }

  goUsers() {
    this.router.navigate(['a','user']);
  }

  goAccounts() {
    this.router.navigate(['a','account']);
  }

  goInfo(){

  }

  logout() {
    this.router.navigate(['home']);
  }

}
