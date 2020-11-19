import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-accounts',
  templateUrl: './employee-accounts.component.html',
  styleUrls: ['./employee-accounts.component.css']
})
export class EmployeeAccountsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  seePending() {
    this.router.navigate(['e','pending']);
  }

}
