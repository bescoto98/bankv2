import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Account } from '@models/account';

@Component({
  selector: 'app-pending-account-view',
  templateUrl: './pending-account-view.component.html',
  styleUrls: ['./pending-account-view.component.css']
})
export class PendingAccountViewComponent implements OnInit {

  focused;

  pendingAccounts = [
  {
    "accountid": 112,
    "balance": 0,
    "type": "SAVINGS",
    "status": "PENDING",
    "approvedby": null,
    "createdon": null,
    "owner": {
        "userid": 114,
        "firstname": "Steven",
        "lastname": "Oregano",
        "username": "stevie",
        "password": "password",
        "role": "CUSTOMER"
    }
},
{
    "accountid": 113,
    "balance": 0,
    "type": "CHECKING",
    "status": "PENDING",
    "approvedby": null,
    "createdon": null,
    "owner": {
        "userid": 109,
        "firstname": "Hilel",
        "lastname": "Drake",
        "username": "drak57",
        "password": "password",
        "role": "CUSTOMER"
    }
  }
];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  viewAccountDetail(acc: Account, content){
    this.focused = acc;
    console.log(this.focused);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
