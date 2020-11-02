import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Account } from '@models/account';
import { User } from '@models/user';
import { NewAccount } from '@models/new-account';
import { Transaction } from '@models/transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  const bankpath = "http://localhost:8999/badbank/account/";

  constructor(private http: HttpClient) { }

  getUsersAccounts(id:number): Observable<Account[]> {
    return this.http.get(this.bankpath + id) as Observable<Account[]>
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get(this.bankpath) as Observable<Account[]>
  }

  addAccount(toAdd:NewAccount): Observable<Account>{
    return this.http.post<Account>(this.bankpath, toAdd)
  }

  updateAccount(toDo:Transaction): Observable<boolean>{
    return this.http.put<boolean>(this.bankpath + "transaction", toDo)
  }
}
