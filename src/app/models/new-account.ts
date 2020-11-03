export class NewAccount {

  public balance:number;
  public type:"CHECKING" | "SAVINGS";
  public ownerid:number;

  constructor(
    balance:number,
    type:"CHECKING" | "SAVINGS",
    ownerid:number
  ){
    this.balance=balance,
    this.type=type,
    this.ownerid=ownerid
  }
}
