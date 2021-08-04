import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetResultService {

  constructor(public http: HttpClient) { }
  getUniversityes(q) {
    return this.http.post('https://edusmartapi.herokuapp.com/api/universityes/test', q);
  }
}
