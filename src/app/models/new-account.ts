export interface NewAccount {

  public balance:number;
  public type?:"CHECKING" | "SAVINGS";
  public ownerid:number;

  constructor(
    balance:number,
    type:String,
    ownerid:number
  ){
    this.balance=balance,
    this.type=type,
    this.ownerid=ownerid
  }

}
