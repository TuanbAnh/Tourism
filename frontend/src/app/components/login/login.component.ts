import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    alert('Bạn đang đăng nhập với vai trò là Admin');
    this.router.navigate(['/home']);
  }
}
