import { Component, ElementRef, Input } from '@angular/core';
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  constructor(public modal: ModalService, public elementRef: ElementRef) {}

  @Input() modalId: string = '';

  ngOnInit() {
    //loads modal after css so it doesnt get css from any parent
    document.body.appendChild(this.elementRef.nativeElement);
  }

  closeModal() {
    this.modal.togleModal(this.modalId);
  }
}
