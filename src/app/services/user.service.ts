import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '@models/user';
import { NewUser } from '@models/new-user';
import { Information } from '@models/information';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  const bankpath = "http://localhost:8999/badbank/user/";

  constructor(private http: HttpClient) { }

  getUser(id:number): Observable<User> {
    return this.http.get(this.bankpath + id) as Observable<User>
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get(this.bankpath) as Observable<User[]>
  }

  getCustomers(): Observable<User[]> {
    return this.http.get(this.bankpath + "customer") as Observable<User[]>
  }

  getEmployees(): Observable<User[]> {
    return this.http.get(this.bankpath + "employee") as Observable<User[]>
  }

  getUserInfo(id:number): Observable<Information> {
    return this.http.get(this.bankpath + "info/" + id) as Observable<Information>
  }

  addUser(toAdd:NewUser): Observable<User> {
    return this.http.post<User>(this.bankpath, toAdd)
  }

  updateUser(toUpdate:User): Observable<User> {
    return this.http.put<User>(this.bankpath, toUpdate)
  }

  updateUserInfo(toUpdate:Information): Observable<Information> {
    return this.http.put<Information>(this.bankpath + "info", toUpdate)
  }
}
