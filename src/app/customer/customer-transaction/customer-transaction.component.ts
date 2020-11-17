import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.css']
})
export class CustomerTransactionComponent implements OnInit {

  isWithdraw: boolean = true;
  isDeposit: boolean = false;
  isTransfer: boolean = false;

  testAccounts =
  [
    {
        "accountid": 107,
        "balance": 500.0,
        "type": "CHECKING",
        "status": "OPEN",
        "approvedby": "Eagan Short",
        "createdon": "10-15-2015",
        "owner": {
            "userid": 107,
            "firstname": "Clinton",
            "lastname": "Hughes",
            "username": "hugh59",
            "password": "password",
            "role": "CUSTOMER"
        }
    },
    {
        "accountid": 108,
        "balance": 700.0,
        "type": "SAVINGS",
        "status": "OPEN",
        "approvedby": "Jerome Holder",
        "createdon": "08-15-2012",
        "owner": {
            "userid": 107,
            "firstname": "Clinton",
            "lastname": "Hughes",
            "username": "hugh59",
            "password": "password",
            "role": "CUSTOMER"
        }
    }
  ];

  accountSelected;
  toAccount;
  amount;

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(changeTo: any) {
    switch(changeTo)
    {
      case 'w':
        this.isWithdraw = true;
        this.isDeposit = false;
        this.isTransfer = false;
        break;
      case 'd':
        this.isWithdraw = false;
        this.isDeposit = true;
        this.isTransfer = false;
        break;
      case 't':
        this.isWithdraw = false;
        this.isDeposit = false;
        this.isTransfer = true;
        break;
    }
  }

  selectAccount(){
    console.log(this.accountSelected);
  }

}
