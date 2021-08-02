import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameuserService {
  public userName: string;

  constructor() {}

  public setUserName(user: string) {
    this.userName = user;
  }
  public getUserName() {
    return this.userName;
  }
}
