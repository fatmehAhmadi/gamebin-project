import { Injectable } from '@angular/core';
interface Imodal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal: Imodal[] = [];

  register(id:string) {
this.modal.push({id:id,visible:false})
  }

  isModalOpen(id:string):boolean {
    return !!this.modal.find(element=>element.id === id)?.visible

  }

  togleModal(id:string) {
    const modal=this.modal.find(element=>element.id === id)
    if (modal) {
      modal.visible = ! modal.visible;

  }
}
