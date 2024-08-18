import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
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

  login() {
    // this.firebaseAuth
    //   .signInWithEmailAndPassword(
    //     this.credentials.email,
    //     this.credentials.password
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
  }
}
