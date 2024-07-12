import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('name'),
    email: new FormControl('name@'),
    age: new FormControl('12'),
    password: new FormControl('12345'),
    confirmPass: new FormControl('12345'),
    phoneNumber: new FormControl('2222'),
  });
}
