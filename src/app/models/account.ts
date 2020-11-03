import { User } from '@models/user';

export class Account {

  public accountid:number;
  public balance:number;
  // public type:string;
  // public status:string;
  public type:"CHECKING" | "SAVINGS";
  public status:"OPEN" | "CLOSED" | "PENDING";
  public approvedby:string;
  public createdon:string;
  public owner:User;


  constructor(
    accountid:number,
    balance:number,
    type:"CHECKING" | "SAVINGS",
    status:"OPEN" | "CLOSED" | "PENDING",
    approvedby:string,
    createdon:string,
    owner:User
  ){
      this.accountid=accountid,
      this.balance=balance,
      this.type=type,
      this.status=status,
      this.approvedby=approvedby,
      this.createdon=createdon,
      this.owner=owner
  }
}
