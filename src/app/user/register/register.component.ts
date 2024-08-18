import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../service/auth.service';
import { IUser } from '../../model/user.model';
import { customValidators } from '../../validators/matchPass';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authService = inject(AuthService); //service
  inSubmission: boolean = false;

  registerForm = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, [Validators.required, Validators.min(3)]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        ),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
        ),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    { validators: customValidators.passwordMatchValidator() }
  );
  alertActive: boolean = false;
  activeMessage: string = '';
  alertColor: string = '';

  onsubmit(form: FormGroup) {
    this.alertActive = true;
    this.activeMessage = 'لطفا صبر کنیدد';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      this.authService.createUser(this.registerForm.value as IUser);
    } catch (error) {
      this.activeMessage = 'خطا، لطفا دوباره امتحان کنید';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }
    this.activeMessage = 'اکانت شما باموفقیت ساخته شد';
    this.alertColor = 'green';
    this.inSubmission = true;
    this.registerForm.reset();
  }
}
