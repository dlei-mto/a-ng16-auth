import { User } from '@aaa/model/user';
import { AuthService } from '@aaa/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  loading = false;
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loading = true;
    this.user = this.authService.userValue;
  }
}
