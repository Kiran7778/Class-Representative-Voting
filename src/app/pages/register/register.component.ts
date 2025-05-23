import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  name = '';
  rollNumber = '';
  email = '';
  department = '';
  password = '';
  message = '';

  register() {
    if (this.name && this.rollNumber && this.email && this.department && this.password) {
      this.message = 'Registration successful!';
    } else {
      this.message = 'Please fill in all fields.';
    }
  }
}
