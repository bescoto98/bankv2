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

}
