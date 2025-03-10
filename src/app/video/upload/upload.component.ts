import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  isDragover = false
  file: File | null = null;
  nextStep: boolean = false;

  storeFile(event: Event) {
    console.log(event);
    this.file = (event as DragEvent).dataTransfer?.files[0] ?? null;

    if (!this.file || this.file.type !== 'video/mp4') {
      return
    }
    console.log(this.file);
    this.nextStep = true;

  }
}
