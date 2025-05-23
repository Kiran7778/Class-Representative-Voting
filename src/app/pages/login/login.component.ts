import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Needed for *ngIf

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private router: Router) {}

  login() {
    if (this.email.trim() && this.password.trim()) {
      this.message = 'Login successful!';
      this.router.navigate(['/register']);  // Redirect after login
    } else {
      this.message = 'Please fill in all fields.';
    }
  }
}
