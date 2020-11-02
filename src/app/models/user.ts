export interface User {

  public userid:number;
  public firstname:string;
  public lastname:string;
  public username:string;
  public password:string;
  // public role:string;
  public role?:"ADMIN" | "EMPLOYEE" | "CUSTOMER";

  constructor(
    userid:number,
    firstname:string,
    lastname:string,
    username:string,
    password:string,
    role:string
  ){
      this.userid=userid,
      this.firstname=firstname,
      this.lastname=lastname,
      this.username=username,
      this.password=password,
      this.role=role
  }
}
