export interface NewAccount {

  public balance:number;
  public type?:"CHECKING" | "SAVINGS";
  public ownerid:number;

  constructor(
    balance:number,
    type:string,
    ownerid:number
  ){
    this.balance=balance,
    this.type=type,
    this.ownerid=ownerid
  }

}
