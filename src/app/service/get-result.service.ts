import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetResultService {

  constructor(public http: HttpClient) { }
  getUniversityes(q) {
    return this.http.post('http://localhost:3000/api/universityes/test', q);
  }
}
