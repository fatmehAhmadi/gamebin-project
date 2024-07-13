import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  MinLengthValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(3)]),
    password: new FormControl('', Validators.required),
    confirmPass: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });
}
