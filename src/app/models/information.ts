import { User } from './user';

export interface Information {

  public infoid:number;
  public ssn:String;
  public address:String;
  public city:String;
  public state:String;
  public zip:String;
  public phone:String;
  public email:String;
  public owner:User;

  constructor(
    infoid:number,
    ssn:String,
    address:String,
    city:String,
    state:String,
    zip:String,
    phone:String,
    email:String,
    owner:User
  ){
      this.infoid=infoid,
      this.ssn=ssn,
      this.address=address,
      this.city=city,
      this.state=state,
      this.zip=zip,
      this.phone=phone,
      this.email=email,
      this.owner=owner,
  }

}
