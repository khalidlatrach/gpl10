import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;
  constructor() {}

  signin() {
    this.isAuth = true;
  }
  signout() {
    this.isAuth = false;
  }
}
