export interface NewUser {

  public firstname:string;
  public lastname:string;
  public username:string;
  public password:string;
  // public role:string;
  public role?:"ADMIN" | "EMPLOYEE" | "CUSTOMER";
  public ssn:string;
  public address:string;
  public city:string;
  public state:string;
  public zip:string;
  public phone:string;
  public email:string;

  constructor(
    firstname:string,
    lastname:string,
    username:string,
    password:string,
    role:string,
    ssn:string,
    address:string,
    city:string,
    state:string,
    zip:string,
    phone:string,
    email:string,

  ){
      this.firstname=firstname,
      this.lastname=lastname,
      this.username=username,
      this.password=password,
      this.role=role,
      this.ssn=ssn,
      this.address=address,
      this.city=city,
      this.state=state,
      this.zip=zip,
      this.phone=phone,
      this.email=email
  }
}
