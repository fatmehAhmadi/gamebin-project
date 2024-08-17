import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  firebaseAuth = inject(Auth);

  login() {
    signInWithEmailAndPassword(
      this.firebaseAuth,
      this.credentials.email,
      this.credentials.password
    ).then((res) => {
      console.log(res);
    });
  }
}
