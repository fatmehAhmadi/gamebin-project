import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClipComponent } from './clip/clip.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'clip/:id',
    component: ClipComponent
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then(m => m.VideoModule),
    canActivate: [AngularFireAuthGuard]

  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

