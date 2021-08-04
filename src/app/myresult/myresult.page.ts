import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myresult',
  templateUrl: './myresult.page.html',
  styleUrls: ['./myresult.page.scss'],
})
export class MyresultPage implements OnInit {
  dataUniversity: any;
  constructor() { }

  ngOnInit() {
    this.dataUniversity = JSON.parse(localStorage.getItem(`datosTest`));
  }

}
