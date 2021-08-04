import { Component, OnInit } from '@angular/core';
import { NameuserService } from './service/nameuser.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  nombre: string;

  constructor(private userService: NameuserService) {}
  ngOnInit() {
    // this.nombre = this.userService.getUserName();
    // console.log('hola' + this.nombre);
  }

  getUserData() {
    this.nombre = this.userService.getUserName();
  }
}
