import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css'],
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  logowanie() {
    if (this.authService.login(this.formData.username, this.formData.password)) {
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Błąd logowania. Sprawdź dane.');
    }
  }
}
