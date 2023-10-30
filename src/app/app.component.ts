import { User } from '@aaa/model/user';
import { AuthService } from '@aaa/service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user?: User | null;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authService.logout();
  }
}
