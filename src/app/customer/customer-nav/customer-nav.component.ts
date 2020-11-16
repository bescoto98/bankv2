import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDash() {
    this.router.navigate(['c']);
  }

  goATM() {
    this.router.navigate(['c','atm']);
  }

  goInfo() {
    this.router.navigate(['c','info']);
  }

  logout() {
    this.router.navigate(['home']);
  }

}
