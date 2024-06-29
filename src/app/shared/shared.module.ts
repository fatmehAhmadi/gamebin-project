import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { AuthModalComponent } from '../user/auth-modal/auth-modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, AuthModalComponent],
  exports: [ModalComponent],
})
export class SharedModule {}
