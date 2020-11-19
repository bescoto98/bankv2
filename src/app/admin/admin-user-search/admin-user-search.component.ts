import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-search',
  templateUrl: './admin-user-search.component.html',
  styleUrls: ['./admin-user-search.component.css']
})
export class AdminUserSearchComponent implements OnInit {

  useID: boolean = false;
  useName: boolean = false;
  useSSN: boolean = false;
  usePhone: boolean = false;
  useEmail: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
