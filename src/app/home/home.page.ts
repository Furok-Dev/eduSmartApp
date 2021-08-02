import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NameuserService } from '../service/nameuser.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string;

  constructor(
    private route: ActivatedRoute,
    private userService: NameuserService
  ) {}
  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
  }
}
