/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  constructor(private questionsService: QuestionsService) {}
  data: any;

  async ngOnInit() {
    await this.questionsService.getQuestions().subscribe((r) => {
      this.data = r.data;
    });
  }
}
