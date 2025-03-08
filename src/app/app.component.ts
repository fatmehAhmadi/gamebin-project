import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AuthModalComponent } from "./user/auth-modal/auth-modal.component";
import { VideoModule } from './video/video.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavComponent, AuthModalComponent, VideoModule]
})
export class AppComponent {
  title = 'gamebin-project';


}
