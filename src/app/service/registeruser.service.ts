import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisteruserService {
  constructor(public http: HttpClient) {}

  registerNewUser(user) {
    return this.http.post('http://localhost:3000/api/user', user);
  }
}
