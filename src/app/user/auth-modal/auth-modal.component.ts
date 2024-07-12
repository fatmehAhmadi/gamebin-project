import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ModalService } from '../../service/modal.service';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css',
  imports: [SharedModule, RegisterComponent, LoginComponent],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}

  ngOnInit() {
    this.modal.register('auth');
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth')
  }
}
