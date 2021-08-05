import { Component, OnInit } from '@angular/core';
import { NameuserService } from './service/nameuser.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  nombre: string;

  constructor(private userService: NameuserService) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: light)');
    toggleDarkTheme(prefersDark.matches);

    // Add or remove the "dark" class based on if the media query matches
    function toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }
    console.log(prefersDark);
  }
  ngOnInit() {}

  getUserData() {
    this.nombre = this.userService.getUserName();
  }
}
