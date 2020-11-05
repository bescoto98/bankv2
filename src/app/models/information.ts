import { User } from '@models/user';

export class Information {

  public infoid:number;
  public ssn:string;
  public address:string;
  public city:string;
  public state:string;
  public zip:string;
  public phone:string;
  public email:string;
  public owner:User;

  constructor(
    infoid:number,
    ssn:string,
    address:string,
    city:string,
    state:string,
    zip:string,
    phone:string,
    email:string,
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
      this.owner=owner
  }
}
