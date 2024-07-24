import { Component } from '@angular/core';
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
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
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
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    { validators: RegisterComponent.passwordMatchValidator() }
  );
  alertActive: boolean = false;
  activeMessage: string = '';
  alertColor: string = '';

  onsubmit(form: FormGroup) {
    console.log(form);
    this.alertActive = true;
    this.activeMessage = 'لطفا صبر کنیدد';
    this.alertColor = 'blue';
  }
}
