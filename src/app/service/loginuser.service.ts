import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginuserService {
  constructor(public http: HttpClient) {}
  loginUser(user) {
    return this.http.post('https://edusmartapi.herokuapp.com/api/user/login', user);
  }
}
