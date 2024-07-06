import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css',
  imports: [SharedModule],
})
export class AuthModalComponent {
  constructor(public modal: ModalService) {}
  ngOnInit() {
    this.modal.register('auth');
  }
}
