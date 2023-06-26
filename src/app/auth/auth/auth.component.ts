import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  userToken: string | null = '';
  rememberMe: boolean = false;
  payload: Login = { email: 'eve.holt@reqres.in', password: 'cityslicka' };
  //so it works email:eve.holt@reqres.in, password:cityslicka

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.payload).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        this.userToken = this.authService.getToken();

        if (this.rememberMe) localStorage.setItem('userToken', response.token);
        else sessionStorage.setItem('userToken', response.token);

        this.router.navigateByUrl('/home');
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
