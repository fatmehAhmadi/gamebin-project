import { Component } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  openModal(event: Event) {
    event.preventDefault();
    this.modal.togleModal('auth');
  }

  async logOut(event: Event) {
    event.preventDefault();
    await this.afAuth.signOut();
  }
}
