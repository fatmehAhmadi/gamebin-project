import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: 'app-auth-modal',
    standalone: true,
    templateUrl: './auth-modal.component.html',
    styleUrl: './auth-modal.component.css',
    imports: [SharedModule]
})
export class AuthModalComponent {

}
