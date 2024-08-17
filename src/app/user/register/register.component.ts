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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  firebaseAuth = inject(Auth);

  static passwordMatchValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const formGroup = form as FormGroup;
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;

      if (password && confirmPassword && password !== confirmPassword) {
        console.log('mismatch');

        return { mismatch: true };
      }
      console.log('no error');

      return null;
    };
  }

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
    { validators: RegisterComponent.passwordMatchValidator() }
  );
  alertActive: boolean = false;
  activeMessage: string = '';
  alertColor: string = '';

  onsubmit(form: FormGroup) {
    this.alertActive = true;
    this.activeMessage = 'لطفا صبر کنیدد';
    this.alertColor = 'blue';
    createUserWithEmailAndPassword(
      this.firebaseAuth,
      this.registerForm.controls.email.value!,
      this.registerForm.controls.password.value!
    ).then((res) => console.log(res));
  }
}
