import { User } from './user';

export interface Account {

  public accountid:number;
  public balance:number;
  // public type:String;
  // public status:String;
  public type?:"CHECKING" | "SAVINGS";
  public status?:"OPEN" | "CLOSED" | "PENDING";
  public approvedby:String;
  public createdon:String;
  public owner:User;


  constructor(
    accountid:number,
    balance:number,
    type:String,
    status:String,
    approvedby:String,
    createdon:String,
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
