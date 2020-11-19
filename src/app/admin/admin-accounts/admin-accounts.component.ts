import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-accounts',
  templateUrl: './admin-accounts.component.html',
  styleUrls: ['./admin-accounts.component.css']
})
export class AdminAccountsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  seePending() {
    this.router.navigate(['a','pending']);
  }

}
