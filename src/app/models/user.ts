export interface User {

  public userid:number;
  public firstname:String;
  public lastname:String;
  public username:String;
  public password:String;
  // public role:String;
  public role?:"ADMIN" | "EMPLOYEE" | "CUSTOMER";

  constructor(
    userid:number,
    firstname:String,
    lastname:String,
    username:String,
    password:String,
    role:String
  ){
      this.userid=userid,
      this.firstname=firstname,
      this.lastname=lastname,
      this.username=username,
      this.password=password,
      this.role=role
  }
}
