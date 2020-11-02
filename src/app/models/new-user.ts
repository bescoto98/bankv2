export interface NewUser {

  public firstname:String;
  public lastname:String;
  public username:String;
  public password:String;
  // public role:String;
  public role?:"ADMIN" | "EMPLOYEE" | "CUSTOMER";
  public ssn:String;
  public address:String;
  public city:String;
  public state:String;
  public zip:String;
  public phone:String;
  public email:String;

  constructor(
    firstname:String,
    lastname:String,
    username:String,
    password:String,
    role:String,
    ssn:String,
    address:String,
    city:String,
    state:String,
    zip:String,
    phone:String,
    email:String,

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
