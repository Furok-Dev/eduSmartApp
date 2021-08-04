import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisteruserService {
  constructor(public http: HttpClient) {}

  registerNewUser(user) {
    return this.http.post('https://edusmartapi.herokuapp.com/api/user', user);
  }
}
