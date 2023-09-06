import { Component } from '@angular/core';
import { AuthService } from '../../@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('authToken', response.token);
        this.router.navigateByUrl('abm');
      },
      (error: any) => {
        console.log(error);
        alert('Credenciales incorrectas');
      }
    );
  }
}
