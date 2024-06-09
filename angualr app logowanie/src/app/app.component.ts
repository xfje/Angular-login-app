import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="!authService.isAuthenticated()">
      <app-logowanie></app-logowanie>
    </div>
    <div *ngIf="authService.isAuthenticated()">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
