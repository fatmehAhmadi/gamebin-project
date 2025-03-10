import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  firebaseAuth = inject(AngularFireAuth);

  alertActive: boolean = false;
  activeMessage: string = '';
  alertColor: string = '';
  authService = inject(AuthService);

  credentials = {
    email: '',
    password: '',
  };

  async login() {
    this.alertActive = true;
    this.activeMessage = 'لطفا صبر کنید';
    this.alertColor = 'blue';

    try {
      await this.authService.login(this.credentials.email, this.credentials.password);
      this.activeMessage = 'ورود شما با موفقیت انجام شد';
      this.alertColor = 'green';
    } catch (error) {
      console.error("خطای ورود:", error);
      this.activeMessage = 'خطا، لطفا دوباره امتحان کنید';
      this.alertColor = 'red';
    }
  }


}
