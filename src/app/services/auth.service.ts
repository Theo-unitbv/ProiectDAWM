import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = '';

  constructor(private httpClient: HttpClient, private router: Router) {}

  getToken(): string | null {
    return this.token;
  }

  setToken(value: string): void {
    this.token = value;
  }

  login(payload: Login): Observable<any> {
    return this.httpClient.post('https://reqres.in/api/login', payload);
  }

  logOut() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('/');
    this.token = null;
  }
}
