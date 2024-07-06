import { Component } from '@angular/core';
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-modal',

  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  constructor(public modal: ModalService) {}

  closeModal() {
    this.modal.togleModal();
  }
}
