import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  authStatus: boolean = false;
  email: string = '';
  mdp: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSignin() {
    if (this.email === 'a' && this.mdp === 'a') {
      this.authService.signin();

      this.authStatus = this.authService.isAuth;
      this.router.navigate(['/pl']);
    }
  }
}
