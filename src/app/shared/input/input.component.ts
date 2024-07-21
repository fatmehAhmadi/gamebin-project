import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() type: string | number = 'text';
  @Input() placeholder: string = '';
  @Input() lable: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() formGroup: FormGroup = new FormGroup({});

}
