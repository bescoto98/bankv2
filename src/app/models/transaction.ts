export class Transaction {

  public fromAccount:number;
  public toAccount:number;
  public amount:number;
  public transtype:string;

  constructor(
    fromAccount:number,
    toAccount:number,
    amount:number,
    transtype:string
  ){
      this.fromAccount=fromAccount,
      this.toAccount=toAccount,
      this.amount=amount,
      this.transtype=transtype
  }
}
