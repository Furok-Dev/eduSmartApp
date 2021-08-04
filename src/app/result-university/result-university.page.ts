import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-university',
  templateUrl: './result-university.page.html',
  styleUrls: ['./result-university.page.scss'],
})
export class ResultUniversityPage implements OnInit {
  data: any;
  isDataLoaded: boolean;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = JSON.parse(this.route.snapshot.paramMap.get('data'));
    this.isDataLoaded = Object.keys(this.data).length < 1;
    console.log(this.isDataLoaded);

    // for (let i of this.data) {
    //   console.log(i.nombreU);
    // }
  }
}
