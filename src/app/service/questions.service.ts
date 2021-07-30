/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(public http: HttpClient) {}

  getQuestions() {
    return this.http.get<any>('http://localhost:3000/api/questions');
  }
}
